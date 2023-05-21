import { Box, Divider, Text } from '@mantine/core'

interface TitleTextProps {
    title: string
}

export function TitleText({ title }: TitleTextProps) {
    return (
        <Box p={10}>
            <Text align="center" fw="bold" size="md">
                {title}
            </Text>
            <Divider />
        </Box>
    )
}
