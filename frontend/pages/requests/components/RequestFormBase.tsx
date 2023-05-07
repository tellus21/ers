import { Box, Button, Group } from '@mantine/core'
import { useRequestMutate } from '../hooks/useRequestMutate'
import { InsuranceFormValues } from '../insurance/insuranceFeature'

const captionUpdate = '更新'

interface RequestFormBaseProps {
    resource: string
    form: any
    children: React.ReactNode
}

export function getDataByRequestId(relatedData: {}, request_id: number): any {
    const relatedDataItem = relatedData.find(
        (relatedData) => relatedData.request_id === request_id
    )
    return relatedDataItem ? relatedDataItem : null
}

export function RequestFormBase({
    resource,
    form,
    children,
}: RequestFormBaseProps) {
    const { updateSelectedDataMutation } = useRequestMutate(resource)
    const handleSubmit = (values: any) => {
        console.log(values)
        const relatedData = getDataByRequestId(values, 1)
        console.log(relatedData)

        // const changeValues = changeIdAndRequestId(values, 1)
        // console.log(changeValues)
        // updateSelectedDataMutation.mutate(changeValues)
    }

    return (
        <form onSubmit={form.onSubmit(handleSubmit)}>
            {children}
            {/* <input type="hidden" {...form.register('id')} /> */}

            <Group position="center" mt="sm">
                <Button size="sm" type="submit">
                    {captionUpdate}
                </Button>
            </Group>
        </form>
    )
}
