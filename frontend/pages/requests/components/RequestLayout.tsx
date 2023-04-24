import { Box, Button, Grid, Group, Paper, Stack } from '@mantine/core'

interface RequestLayoutProps {
    form: any
    top?: React.ReactNode
    leftTop?: React.ReactNode
    leftCenter?: React.ReactNode
    leftBottom?: React.ReactNode
    rightTop?: React.ReactNode
    rightButtom?: React.ReactNode
}

export function RequestLayout({
    form,
    top,
    leftTop,
    leftCenter,
    leftBottom,
    rightTop,
    rightButtom,
}: RequestLayoutProps) {
    //modal開いた時に行われる処理を作成して、ここでuse○○で呼べばよいか
    //user_idにログイン者のidを付与する。ログイン機能ができるまでは仮に1とかで

    return (
        <Box bg="gray.2" p={20}>
            <Grid>
                <button onClick={() => console.log(form)}>dd</button>
                <Grid.Col span={12}>{top && <Paper>{top}</Paper>}</Grid.Col>
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
            </Group>
        </Box>
    )
}
