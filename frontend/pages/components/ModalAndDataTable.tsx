import { convertDateProperty } from '@/common/lib'
import { Button, Container, Group, Modal, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { DataTableBase } from './DataTableBase'

interface ModalAndDataTableProps {
    query: any
    logicalName: string
    modalSize?: string
    children: React.ReactNode
    form: any
    tableColumns: any
}

export function ModalAndDataTable({
    query,
    logicalName,
    modalSize,
    children,
    form,
    tableColumns,
}: ModalAndDataTableProps) {
    const [modalOpened, modalHandlers] = useDisclosure(false)
    const onModalCloseClick = () => modalHandlers.close()
    const onCreateButtonClick = () => {
        form.reset()
        modalHandlers.open()
    }
    const onTableRowClick = (rowData: any) => {
        const selectedData = query.find((item: any) => item.id === rowData.id)
        //birthdayをDate型に変換してからフォームに設定する
        console.log(selectedData)
        form.setValues(convertDateProperty(selectedData, 'birthday'))
        modalHandlers.open()
    }

    return (
        <Container size="xl">
            <Text size="md">{`${logicalName}一覧`}</Text>
            <Modal
                opened={modalOpened}
                onClose={onModalCloseClick}
                title={`${logicalName}登録`}
                size={modalSize}
            >
                {children}
            </Modal>

            <Group position="right">
                <Button
                    size="sm"
                    onClick={onCreateButtonClick}
                >{`${logicalName}登録`}</Button>
            </Group>

            <DataTableBase
                columns={tableColumns}
                records={query}
                onRowClick={(rowData) => onTableRowClick(rowData)}
            />
        </Container>
    )
}
