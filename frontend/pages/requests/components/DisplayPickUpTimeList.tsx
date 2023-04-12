import { Box, Divider, Group, Stack, Text } from '@mantine/core'
import React from 'react'

interface DisplayPickUpTimeListProps {
    homeClinics: { name: string; time: string }[]
}

export function DisplayPickUpTimeList({
    homeClinics,
}: DisplayPickUpTimeListProps) {
    return (
        <>
            <Text size="xs">送迎時間</Text>
            <Group>
                <Divider orientation="vertical" />
                {homeClinics.map((homeClinics, index) => (
                    <Stack spacing="xs" align="center" key={index}>
                        <Group spacing="xs">
                            <Text>{homeClinics.name}</Text>
                            <Box bg="gray.0" p={5}>
                                {homeClinics.time}
                            </Box>
                            <Divider size="xs" orientation="vertical" />
                        </Group>
                    </Stack>
                ))}
            </Group>
        </>
    )
}
