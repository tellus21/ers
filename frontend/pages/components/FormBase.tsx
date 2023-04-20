import { useState } from 'react'
import { Box, Button, Group, Space } from '@mantine/core'
import { useMutateBase } from '../../common/hooks'

const captionCreat = '登録'
const captionUpdate = '更新'
const captionDelete = '削除'

interface FormBaseProps {
    resource: string
    form: any
    children: React.ReactNode
}

// 新規の場合はinitialValues空欄、更新と削除の場合はPropsで受け渡し
export function FormBase({ resource, form, children }: FormBaseProps) {
    const {
        createNewDataMutation,
        updateSelectedDataMutation,
        deleteSelectedDataMutation,
    } = useMutateBase(resource)
    const [clickedButtonName, setClickedButtonName] = useState<string>('')
    const onClickCreateButton = (): void => setClickedButtonName('create')
    const onClickUpdateButton = (): void => setClickedButtonName('update')
    const onClickDeleteButton = (): void => setClickedButtonName('delete')

    return (
        <Box>
            <form
                onSubmit={form.onSubmit((values: any) => {
                    switch (clickedButtonName) {
                        case 'create':
                            createNewDataMutation.mutate(values)
                            break
                        case 'update':
                            updateSelectedDataMutation.mutate(values)
                            break
                        case 'delete':
                            deleteSelectedDataMutation.mutate(values)
                            break
                        default:
                            break
                    }
                })}
            >
                {children}

                {form.values.id === 0 ? (
                    // 登録の場合
                    <Group position="center" mt="sm">
                        <Button
                            size="sm"
                            type="submit"
                            onClick={onClickCreateButton}
                        >
                            {captionCreat}
                        </Button>
                    </Group>
                ) : form.values.id !== 0 ? (
                    // 更新/削除の場合
                    <Group position="center" mt="sm">
                        <Button
                            size="sm"
                            type="submit"
                            onClick={onClickUpdateButton}
                        >
                            {captionUpdate}
                        </Button>
                        <Space w="xl" />
                        <Button
                            size="sm"
                            type="submit"
                            onClick={onClickDeleteButton}
                            color="red.7"
                        >
                            {captionDelete}
                        </Button>
                    </Group>
                ) : null}
            </form>
        </Box>
    )
}
