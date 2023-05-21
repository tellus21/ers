import { useEffect } from 'react'
import { useHomeCareDoctorFeature } from './homeCareDoctorFeature'
import { ModalAndDataTable } from '../components/ModalAndDataTable'
import { FormBase } from '../components/FormBase'
import { NormalFields } from '../components/NormalFields'

export function IndexHomeCareDoctors() {
    const { logicalName, resource, columns, form, fields, query } =
        useHomeCareDoctorFeature()

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
