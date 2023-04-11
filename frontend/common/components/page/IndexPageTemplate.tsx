import { useForm } from '@mantine/form'
import { ModalAndDataTable } from '../ModalAndDataTable'
import { FormBase } from '../FormBase'
import { NormalFields } from '../NormalFields'

interface CommonIndexPageProps {
    resource: string
    logicalName: string
    modalSize?: string
    formInitialValues: any
    formValidate: any
    formTransFormValues?: any
    formFields: any
    tableColumns: any
}

export function IndexPageTemplate({
    resource,
    logicalName,
    modalSize,
    formInitialValues,
    formValidate,
    formTransFormValues,
    formFields,
    tableColumns,
}: CommonIndexPageProps) {
    const form = useForm({
        initialValues: formInitialValues,
        validate: formValidate,
        transformValues: formTransFormValues,
    })

    return (
        <ModalAndDataTable
            resource={resource}
            logicalName={logicalName}
            modalSize={modalSize}
            form={form}
            tableColumns={tableColumns}
        >
            <FormBase resource={resource} form={form}>
                <NormalFields form={form} fields={formFields} />
            </FormBase>
        </ModalAndDataTable>
    )
}
