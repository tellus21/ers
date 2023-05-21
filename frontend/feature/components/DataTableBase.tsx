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
/**
 * DataTableBaseコンポーネントは、テーブルを表示するためのReactコンポーネント。
 * テーブルには、指定された列と日付列が含まれています。
 * 日付列は、作成日と更新日のフォーマットをYYYY/MM/DD形式に変換して表示します。
 */
export function DataTableBase({
    columns,
    records,
    onRowClick,
}: DataTableBaseProps) {
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
