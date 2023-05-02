import { Box, Button, Group } from '@mantine/core'
import { useRequestMutate } from '../hooks/useRequestMutate'
import { InsuranceFormValues } from '../insurance/insuranceFeature'

const captionUpdate = '更新'

interface RequestFormBaseProps {
    resource: string
    form: any
    children: React.ReactNode
}

export function getIdByRequestId(targetData: {}, request_id: number): number {
    const insurance = targetData.find(
        (targetData) => targetData.request_id === request_id
    )
    return insurance ? insurance.id : null
}

// export function getIdByRequestId(request_id: number): number {
//     const insurance = Insurance.find(
//         (insurance) => insurance.request_id === request_id
//     )
//     return insurance ? insurance.id : null
// }

function changeIdAndRequestId(
    valuses: InsuranceFormValues,
    id: number,
    request_id: number
): InsuranceFormValues {
    const newValues = { ...valuses }
    newValues.id = id
    newValues.request_id = request_id
    return newValues
}

export function RequestFormBase({
    resource,
    form,
    children,
}: RequestFormBaseProps) {
    const { updateSelectedDataMutation } = useRequestMutate(resource)
    const handleSubmit = (values: any) => {
        const changeValues = changeIdAndRequestId(values, 1, 2)
        console.log(changeValues)
        updateSelectedDataMutation.mutate(changeValues)
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
