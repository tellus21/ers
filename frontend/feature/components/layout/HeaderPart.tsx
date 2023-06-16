import { Box, Group, Text } from '@mantine/core'

interface HeaderPartProps {
    loginName: string
}

export function HeaderPart({ loginName }: HeaderPartProps) {
    return (
        <Box p={15}>
            <Group position="right">
                <Text size="md">ログイン名：{loginName}</Text>
                <Box px={70} />
            </Group>
        </Box>
    )
}
