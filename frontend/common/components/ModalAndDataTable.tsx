import { Box, Button, Group, Loader, Modal, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { DataTable } from 'mantine-datatable'
import { useQueryBase } from '../hooks'

//templateTypeに|stringを加えないと、スプレッド構文を利用したときに、エラーになる。
interface ModalAndDataTableProps {
    feature: string
    logicalName: string
    modalSize?: string
    children: React.ReactNode
    form: any
    tableColumns: any
}

export function ModalAndDataTable({
    feature,
    logicalName,
    modalSize,
    children,
    form,
    tableColumns,
}: ModalAndDataTableProps) {
    // TODO: IndexTemplate用のuseを作ってここに書く
    const [modalOpened, modalHandlers] = useDisclosure(false)
    const { isLoading, error, data: query } = useQueryBase(feature)
    const allQuery = query?.[feature]

    isLoading ? <Loader /> : null
    error ? <Text>Errorです！</Text> : null

    const onModalCloseClick = () => modalHandlers.close()
    const onCreateButtonClick = () => {
        form.reset()
        modalHandlers.open()
    }
    const onTableRowClick = (rowData: any) => {
        form.setValues(rowData)
        modalHandlers.open()
    }

    return (
        <Box>
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

            {/* defaultPropsにかけないので、ここに書くしかないか */}
            <DataTable
                withBorder
                borderRadius="sm"
                shadow="sm"
                withColumnBorders
                striped
                highlightOnHover
                horizontalSpacing="xs"
                verticalSpacing="xs"
                fontSize="xs"
                verticalAlignment="center"
                columns={tableColumns}
                records={allQuery}
                onRowClick={(rowData) => onTableRowClick(rowData)}
            />
        </Box>
    )
}
