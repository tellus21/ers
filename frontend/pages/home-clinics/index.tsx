import { FormBase } from '@/common/components/FormBase'
import { ModalAndDataTable } from '@/common/components/ModalAndDataTable'
import { NormalFields } from '@/common/components/NormalFields'
import { useHomeClinic } from './useHomeClinic'

export default function index() {
    const {
        logicalName,
        physicalName,
        resource,
        query,
        columns,
        form,
        fields,
    } = useHomeClinic()

    return (
        <ModalAndDataTable
            resource={resource}
            logicalName={logicalName}
            form={form}
            tableColumns={columns}
        >
            <FormBase resource={resource} form={form}>
                <NormalFields form={form} fields={fields} />
            </FormBase>
        </ModalAndDataTable>
    )
}
