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
            <Group>
                <Divider orientation="vertical" />
                {homeClinics?.map((homeClinics, index) => (
                    <Stack spacing="xs" align="center" key={index}>
                        <Group spacing="xs">
                            <Text size="xs">{homeClinics.name}</Text>
                            <Box bg="gray.0" p={5}>
                                <Text>{homeClinics.time}</Text>
                            </Box>
                            <Divider size="xs" orientation="vertical" />
                        </Group>
                    </Stack>
                ))}
            </Group>
        </>
    )
}
