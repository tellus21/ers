import { Box, Button, Grid, Group, Paper, Stack } from '@mantine/core'

interface RequestLayoutProps {
    Top?: React.ReactNode
    leftTop?: React.ReactNode
    leftCenter?: React.ReactNode
    leftBottom?: React.ReactNode
    rightTop?: React.ReactNode
    rightButtom?: React.ReactNode
}

export function RequestLayout({
    Top,
    leftTop,
    leftCenter,
    leftBottom,
    rightTop,
    rightButtom,
}: RequestLayoutProps) {
    return (
        <Box bg="gray.2" p={20}>
            <Grid>
                <Grid.Col span={12}>{Top && <Paper>{Top}</Paper>}</Grid.Col>
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
