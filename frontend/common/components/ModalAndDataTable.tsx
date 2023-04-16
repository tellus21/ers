import { Box, Button, Group, Loader, Modal, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { DataTable } from 'mantine-datatable'

interface DataTableBaseProps {
    columns: any
    records: any
    onRowClick: (rowData: any) => void
}

function DataTableBase({ columns, records, onRowClick }: DataTableBaseProps) {
    return (
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
            columns={columns}
            records={records}
            onRowClick={onRowClick}
        />
    )
}

//templateTypeに|stringを加えないと、スプレッド構文を利用したときに、エラーになる。
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
    // const { isLoading, error, data: query } = useQueryBase(resource)
    // const allQuery = query?.[resource]

    // isLoading ? <Loader /> : null
    // error ? <Text>Errorです！</Text> : null

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

            <DataTableBase
                columns={tableColumns}
                records={query}
                onRowClick={(rowData) => onTableRowClick(rowData)}
            />
        </Box>
    )
}
