import { Space, TextInput } from '@mantine/core'
import { useDebouncedValue } from '@mantine/hooks'
import { IconSearch } from '@tabler/icons-react'
import dayjs from 'dayjs'
import { DataTable } from 'mantine-datatable'
import { useEffect, useState } from 'react'

// 日付表示用のカラムを定義
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

// テーブルの基本的なプロパティを定義
interface DataTableBaseProps {
    columns: any
    records: any
    onRowClick: (rowData: any) => void
}

// テーブルをレンダリングする関数を定義
export function DataTableBase({
    columns,
    records: initialRecords,
    onRowClick,
}: DataTableBaseProps) {
    // テーブルに表示するレコードを管理するstateを定義
    const [records, setRecords] = useState(initialRecords)
    // 検索文字列を管理するstateを定義
    const [query, setQuery] = useState('')
    // 検索文字列を遅延させるためのhookを使用
    const [debouncedQuery] = useDebouncedValue(query, 200)

    // 検索文字列が変更されたときに、テーブルに表示するレコードをフィルタリング
    useEffect(() => {
        if (debouncedQuery === '') {
            setRecords(initialRecords)
        } else {
            const filteredRecords = initialRecords.filter((record) => {
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
            setRecords(filteredRecords)
        }
    }, [debouncedQuery, initialRecords])

    // テーブルをレンダリング
    return (
        <>
            <TextInput
                placeholder="文字列検索"
                size="sm"
                icon={<IconSearch />}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                w={400}
            />

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
                columns={[...columns, ...dateColumns]}
                records={records}
                onRowClick={onRowClick}
            />
        </>
    )
}
