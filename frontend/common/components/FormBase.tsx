import { useState } from 'react'
import { Box, Button, Group, Space } from '@mantine/core'
import { useMutateBase } from '../hooks'

const captionCreat = '登録'
const captionUpdate = '更新'
const captionDelete = '削除'

interface FormBaseProps {
    feature: string
    form: any
    children: React.ReactNode
}

// 新規の場合はinitialValues空欄、更新と削除の場合はPropsで受け渡し
export function FormBase({ feature, form, children }: FormBaseProps) {
    const {
        createNewDataMutation,
        updateSelectedDataMutation,
        deleteSelectedDataMutation,
    } = useMutateBase(feature)
    const [clickedButtonName, setClickedButtonName] = useState<string>('')
    const onClickCreateButton = (): void => setClickedButtonName('create')
    const onClickUpdateButton = (): void => setClickedButtonName('update')
    const onClickDeleteButton = (): void => setClickedButtonName('delete')

    return (
        <Box>
            <form
                onSubmit={form.onSubmit((values: any) => {
                    clickedButtonName === 'create'
                        ? createNewDataMutation.mutate(values)
                        : //   console.log(values)
                        clickedButtonName === 'update'
                        ? updateSelectedDataMutation.mutate(values)
                        : clickedButtonName === 'delete'
                        ? deleteSelectedDataMutation.mutate(values)
                        : null
                })}
            >
                {children}

                {form.values.id === '0' ? (
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
                ) : form.values.id !== '0' ? (
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
