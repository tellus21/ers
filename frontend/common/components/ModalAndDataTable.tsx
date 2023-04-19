import {
    Box,
    Button,
    Container,
    Group,
    Loader,
    Modal,
    Text,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import dayjs from 'dayjs'
import { DataTable } from 'mantine-datatable'

const dateColumns = [
    {
        accessor: 'created_at',
        title: '作成日',
        textaligment: 'center',
        render: ({ created_at }: { created_at: Date }) =>
            dayjs(created_at).format('YYYY/MM/DD'),
    },
    {
        accessor: 'updated_at',
        title: '更新日',
        textaligment: 'center',
        render: ({ updated_at }: { updated_at: Date }) =>
            dayjs(updated_at).format('YYYY/MM/DD'),
    },
]

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
            columns={[...columns, ...dateColumns]}
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
