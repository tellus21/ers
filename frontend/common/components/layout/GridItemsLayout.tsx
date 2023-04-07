import { Box, Grid, Paper, Stack } from '@mantine/core'

interface GridItemsLayoutProps {
    leftTop?: React.ReactNode
    leftCenter?: React.ReactNode
    leftBottom?: React.ReactNode
    rightTop?: React.ReactNode
    rightButtom?: React.ReactNode
}

export function GridItemsLayout({
    leftTop,
    leftCenter,
    leftBottom,
    rightTop,
    rightButtom,
}: GridItemsLayoutProps) {
    return (
        <Box bg="gray.2" p={20}>
            <Grid>
                <Grid.Col span={4}>
                    <Stack>
                        <Paper shadow="xs" p="sm">
                            {leftTop}
                        </Paper>
                        <Paper shadow="xs" p="sm">
                            {leftCenter}
                        </Paper>
                        <Paper shadow="xs" p="sm">
                            {leftBottom}
                        </Paper>
                    </Stack>
                </Grid.Col>
                <Grid.Col span={8}>
                    <Stack>
                        <Paper shadow="xs" p="sm">
                            {rightTop}
                        </Paper>
                        <Paper shadow="xs" p="sm">
                            {rightButtom}
                        </Paper>
                    </Stack>
                </Grid.Col>
            </Grid>
        </Box>
    )
}
