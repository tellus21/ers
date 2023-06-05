import { Box, Center, Group, Tabs, Text } from '@mantine/core'

import { InstructionForm } from '../InstructionForm'

import { useState } from 'react'
import { useInstructionFeature } from '../instractionFeature'
import { TitleText } from '../../components/TitleText'

export function TabsSelectInstruction() {
    const [activeTab, setActiveTab] = useState<string | null>('order')
    const { logicalName, resource, query, form } = useInstructionFeature()

    return (
        <Box>
            <TitleText title="指示内容" />

            <Tabs value={activeTab} onTabChange={setActiveTab}>
                <Tabs.List position="center">
                    <Tabs.Tab value="order">
                        <Center>
                            <Text size="sm">１</Text>
                        </Center>
                    </Tabs.Tab>
                    <Tabs.Tab value="reservation">
                        <Text size="sm">２</Text>
                    </Tabs.Tab>
                </Tabs.List>
            </Tabs>
        </Box>
    )
}
