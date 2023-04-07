import { useForm } from '@mantine/form'
import { ModalAndDataTable } from '../ModalAndDataTable'
import { FormBase } from '../FormBase'
import { NormalFields } from '../NormalFields'

interface CommonIndexPageProps {
    feature: string
    logicalName: string
    modalSize?: string
    formInitialValues: any
    formValidate: any
    formTransFormValues?: any
    formFields: any
    tableColumns: any
}

export function IndexPageTemplate({
    feature,
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
            feature={feature}
            logicalName={logicalName}
            modalSize={modalSize}
            form={form}
            tableColumns={tableColumns}
        >
            <FormBase feature={feature} form={form}>
                <NormalFields form={form} fields={formFields} />
            </FormBase>
        </ModalAndDataTable>
    )
}
