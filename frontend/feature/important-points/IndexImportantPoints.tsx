import { useEffect } from 'react'
import { useImportantPointFeature } from './ImportantPointFeature'
import { ModalAndDataTable } from '../components/ModalAndDataTable'
import { FormBase } from '../components/FormBase'
import { NormalFields } from '../components/NormalFields'

export function IndexImportantPoints() {
    const { logicalName, resource, columns, form, fields, query } =
        useImportantPointFeature()

    useEffect(() => {}, [fields, query])

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
