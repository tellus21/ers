import { useEffect } from 'react'
import { FormBase } from '@/pages/components/FormBase'
import { ModalAndDataTable } from '@/pages/components/ModalAndDataTable'
import { NormalFields } from '@/pages/components/NormalFields'
import { useHomeCareClinicFeature } from './homeCareClinicFeature'

export default function index() {
    const { logicalName, resource, columns, form, fields, query } =
        useHomeCareClinicFeature()

    useEffect(() => {}, [fields, query])

    return (
        <ModalAndDataTable
            logicalName={logicalName}
            form={form}
            tableColumns={columns}
            query={query}
        >
            <FormBase resource={resource} form={form}>
                <NormalFields form={form} fields={fields} />
            </FormBase>
        </ModalAndDataTable>
    )
}
