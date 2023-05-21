import { useEffect } from 'react'
import { useUserFeature } from './UserFeature'
import { ModalAndDataTable } from '../components/ModalAndDataTable'
import { FormBase } from '../components/FormBase'
import { NormalFields } from '../components/NormalFields'

export function IndexUsers() {
    const { logicalName, resource, columns, form, fields, query } =
        useUserFeature()

    useEffect(() => {}, [query, fields])

    return (
        <ModalAndDataTable
            logicalName={logicalName}
            form={form}
            tableColumns={columns}
            query={query}
        >
            {/* モーダル部分 */}
            <FormBase resource={resource} form={form}>
                <NormalFields form={form} fields={fields} />
            </FormBase>
        </ModalAndDataTable>
    )
}
