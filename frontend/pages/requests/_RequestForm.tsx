import { Box, Button, Grid, Group, Paper, Stack } from '@mantine/core'
import { useEffect, useState } from 'react'
import { useMutateBase } from '@/common/hooks'
import { RequestFormValues } from './requestFeature'
import { RequestMetaData } from './RequestMetaData'

interface RequestFormProps {
    form: any
    leftTop?: React.ReactNode
    leftCenter?: React.ReactNode
    leftBottom?: React.ReactNode
    rightTop?: React.ReactNode
    rightButtom?: React.ReactNode
}

export function RequestForm({
    form,
    leftTop,
    leftCenter,
    leftBottom,
    rightTop,
    rightButtom,
}: RequestFormProps) {
    //modal開いた時に行われる処理を作成して、ここでuse○○で呼べばよいか
    //user_idにログイン者のidを付与する。ログイン機能ができるまでは仮に1とかで

    const resource = 'requests'
    const { createNewDataMutation } = useMutateBase(resource)

    //useEffectで、form.setFieldValue('user_id', 1)として、
    //createNewDataMutation.mutate(form.values)とすると、
    //user_idがnullになってしまう。なぜだろうか
    const postData: RequestFormValues = {
        id: 0,
        user_id: 1, //ログイン者のidを入れる
        patient_id: null,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
    }

    const [request, setRequest] = useState<RequestFormValues>(postData)

    useEffect(() => {
        const newData = createNewDataMutation.mutate(postData)
        setRequest(newData)
    }, [])

    return (
        <Box bg="gray.2" p={20}>
            {/* <Grid>
                <Grid.Col span={12}>
                    <Paper>
                        <button onClick={() => console.log(request)}></button>
                        <RequestMetaData form={form} />
                    </Paper>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Stack>
                        {leftTop && <Paper>{leftTop}</Paper>}
                        {leftCenter && <Paper>{leftCenter}</Paper>}
                        {leftBottom && <Paper>{leftBottom}</Paper>}
                    </Stack>
                </Grid.Col>
                <Grid.Col span={8}>
                    <Stack>
                        {rightTop && <Paper>{rightTop}</Paper>}
                        {rightButtom && <Paper>{rightButtom}</Paper>}
                    </Stack>
                </Grid.Col>
            </Grid>
            <Group position="right">
                <Button color="red" size="sm">
                    依頼削除
                </Button>
            </Group> */}
        </Box>
    )
}
