import { useEffect } from 'react'
import { FormBase } from '@/common/components/FormBase'
import { ModalAndDataTable } from '@/common/components/ModalAndDataTable'
import { NormalFields } from '@/common/components/NormalFields'
import { useHomeCareDoctorFeature } from './homeCareDoctorFeature'

export default function index() {
    const { logicalName, resource, query, form, columns, fields } =
        useHomeCareDoctorFeature()

    useEffect(() => {}, [query, fields])

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
