import { FormBase } from '@/common/components/FormBase'
import { ModalAndDataTable } from '@/common/components/ModalAndDataTable'
import { NormalFields } from '@/common/components/NormalFields'
import { useExamClinic } from './useExamClinic'

export default function index() {
    const { logicalName, physicalName, feature, query, columns, form, fields } =
        useExamClinic()

    return (
        <ModalAndDataTable
            feature={feature}
            logicalName={logicalName}
            form={form}
            tableColumns={columns}
        >
            <FormBase feature={feature} form={form}>
                <NormalFields form={form} fields={fields} />
            </FormBase>
        </ModalAndDataTable>
    )
}
