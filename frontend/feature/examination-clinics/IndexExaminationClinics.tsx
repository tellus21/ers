import { FormBase } from '../components/FormBase'
import { ModalAndDataTable } from '../components/ModalAndDataTable'
import { NormalFields } from '../components/NormalFields'
import { useExaminationClinicFeature } from './examinationClinicFeature'

export function IndexExaminationClinics() {
    const { logicalName, resource, columns, form, fields, query } =
        useExaminationClinicFeature()

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
