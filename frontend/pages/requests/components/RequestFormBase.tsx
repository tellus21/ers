import { useMutateBase } from '@/common/hooks'
import { Box, Button, Group } from '@mantine/core'
import { useState } from 'react'

const captionCreat = '登録'
const captionUpdate = '更新'
const captionDelete = '削除'

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
    const {
        createNewDataMutation,
        updateSelectedDataMutation,
        deleteSelectedDataMutation,
    } = useMutateBase(resource)
    const [clickedButtonName, setClickedButtonName] = useState<string>('')

    const handleSubmit = (values: any) => {
        clickedButtonName === 'create'
            ? createNewDataMutation.mutate(values)
            : clickedButtonName === 'update'
            ? updateSelectedDataMutation.mutate(values)
            : clickedButtonName === 'delete'
            ? deleteSelectedDataMutation.mutate(values)
            : null
    }

    return (
        <Box>
            <form onSubmit={form.onSubmit(handleSubmit)}>
                {children}

                <Group position="center" mt="sm">
                    {
                        // /* 新規の場合 */
                        form.values.id === 0 ? (
                            <Button
                                size="sm"
                                type="submit"
                                onClick={() => setClickedButtonName('create')}
                            >
                                {captionCreat}
                            </Button>
                        ) : // /* 更新の場合 */
                        form.values.id !== 0 ? (
                            <Button
                                size="sm"
                                type="submit"
                                onClick={() => setClickedButtonName('update')}
                            >
                                {captionUpdate}
                            </Button>
                        ) : null
                    }
                </Group>
            </form>
        </Box>
    )
}
