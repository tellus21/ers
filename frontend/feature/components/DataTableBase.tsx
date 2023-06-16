import { Group, Space, TextInput } from '@mantine/core'
import { useDebouncedValue } from '@mantine/hooks'
import { IconSearch } from '@tabler/icons-react'
import dayjs from 'dayjs'
import { DataTable, DataTableSortStatus } from 'mantine-datatable'
import { useEffect, useState } from 'react'
import sortBy from 'lodash/sortBy'

// 日付表示用のカラムを定義
const dateColumns = [
    {
        accessor: 'created_at',
        title: '作成日',
        textaligment: 'center',
        render: ({ created_at }: { created_at: Date }) =>
            dayjs(created_at).format('YYYY/MM/DD'),
        sortable: true,
    },
    {
        accessor: 'updated_at',
        title: '更新日',
        textaligment: 'center',
        render: ({ updated_at }: { updated_at: Date }) =>
            dayjs(updated_at).format('YYYY/MM/DD'),
        sortable: true,
    },
]

// テーブルの基本的なプロパティを定義
interface DataTableBaseProps {
    button?: any
    columns: any
    addDateColumns?: boolean
    records: any
    onRowClick: (rowData: any) => void
    rowStyle?: any
}

// テーブルをレンダリングする関数を定義
export function DataTableBase({
    button,
    columns,
    addDateColumns = true,
    records: initialRecords,
    onRowClick,
    rowStyle,
}: DataTableBaseProps) {
    // テーブルに表示するレコードを管理するstateを定義
    const [records, setRecords] = useState(initialRecords)
    // 並び替えのステータスを管理するstateを定義
    const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
        columnAccessor: 'updated_at',
        direction: 'desc',
    })
    // 検索文字列を管理するstateを定義
    const [query, setQuery] = useState('')
    // 検索文字列を遅延させるためのhookを使用
    const [debouncedQuery] = useDebouncedValue(query, 200)

    // 検索文字列が変更されたとき、または並び替えのステータスが変更されたときに、テーブルに表示するレコードをフィルタリング・ソートする
    useEffect(() => {
        // 並び替えのステータスに従ってレコードをソート
        const sortedRecord = sortBy(initialRecords, sortStatus.columnAccessor)
        let filteredRecords
        // 検索文字列が入力されている場合は、レコードをフィルタリング
        if (debouncedQuery === '') {
            filteredRecords = sortedRecord
        } else {
            filteredRecords = initialRecords.filter((record: any) => {
                return Object.values(record).some((value) => {
                    if (
                        typeof value === 'object' &&
                        value !== null &&
                        value !== undefined
                    ) {
                        return Object.values(value).some(
                            (innerValue) =>
                                typeof innerValue === 'string' &&
                                innerValue.includes(debouncedQuery)
                        )
                    }
                    return (
                        typeof value === 'string' &&
                        value.includes(debouncedQuery)
                    )
                })
            })
        }
        // 並び替えのステータスに従ってレコードをソート
        setRecords(
            sortStatus.direction === 'desc'
                ? filteredRecords.reverse()
                : filteredRecords
        )
    }, [debouncedQuery, initialRecords, sortStatus])

    // テーブルをレンダリング
    return (
        <>
            <Group position="apart">
                <TextInput
                    placeholder="文字列検索"
                    size="sm"
                    icon={<IconSearch />}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    w={400}
                />

                {button}
            </Group>

            <Space h="xs" />

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
                columns={
                    addDateColumns ? [...columns, ...dateColumns] : columns
                }
                records={records}
                onRowClick={onRowClick}
                rowStyle={rowStyle}
                sortStatus={sortStatus}
                onSortStatusChange={setSortStatus}
            />
        </>
    )
}
