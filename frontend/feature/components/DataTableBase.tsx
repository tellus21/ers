import { Space, TextInput } from '@mantine/core'
import { useDebouncedValue } from '@mantine/hooks'
import { IconSearch } from '@tabler/icons-react'
import dayjs from 'dayjs'
import { DataTable } from 'mantine-datatable'
import { useEffect, useState } from 'react'

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

export function DataTableBase({
    columns,
    records: initialRecords,
    onRowClick,
}: DataTableBaseProps) {
    const [records, setRecords] = useState(initialRecords)
    const [query, setQuery] = useState('')
    const [debouncedQuery] = useDebouncedValue(query, 200)

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

    return (
        <>
            <TextInput
                placeholder="文字列検索"
                size="sm"
                icon={<IconSearch />}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
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
