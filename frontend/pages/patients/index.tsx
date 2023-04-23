import { FormBase } from '@/pages/components/FormBase'
import { ModalAndDataTable } from '@/pages/components/ModalAndDataTable'
import { NormalFields } from '@/pages/components/NormalFields'
import { useEffect } from 'react'
import { usePatientFeature } from './patientFeature'

export default function index() {
    const { logicalName, resource, columns, form, fields, query } =
        usePatientFeature()

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
