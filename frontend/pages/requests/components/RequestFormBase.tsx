import { useMutateBase } from '@/common/hooks'
import { Box, Button, Group } from '@mantine/core'
import { useState } from 'react'
import { useRequestMutate } from '../hooks/useRequestMutate'

const captionUpdate = '更新'

interface RequestFormBaseProps {
    resource: string
    form: any
    children: React.ReactNode
}

export function RequestFormBase({
    resource,
    form,
    children,
}: RequestFormBaseProps) {
    const { updateSelectedDataMutation } = useRequestMutate(resource)
    const [clickedButtonName, setClickedButtonName] = useState<string>('')
    const handleSubmit = (values: any) => {
        updateSelectedDataMutation.mutate(values)
    }

    return (
        <Box>
            <form onSubmit={form.onSubmit(handleSubmit)}>
                {children}
                {/* <input type="hidden" {...form.register('id')} /> */}

                <Group position="center" mt="sm">
                    <Button
                        size="sm"
                        type="submit"
                        onClick={() => setClickedButtonName('update')}
                    >
                        {captionUpdate}
                    </Button>
                </Group>
            </form>
        </Box>
    )
}
