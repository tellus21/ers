import { Box, Center, Group, Tabs, Text } from '@mantine/core'

import { InstractionForm } from './InstractionForm'

import { useState } from 'react'
import { TitleText } from '@/pages/requests/components/TitleText'
import { useInstraction } from './useInstraction'

export function TabsSelectInstruction() {
    const [activeTab, setActiveTab] = useState<string | null>('request')
    const { logicalName, physicalName, resource, query, form } =
        useInstraction()

    return (
        <Box>
            <TitleText title="指示内容" />

            <Tabs value={activeTab} onTabChange={setActiveTab}>
                <Tabs.List position="center">
                    <Tabs.Tab value="request">
                        <Center>
                            <Text size="sm">１</Text>
                        </Center>
                    </Tabs.Tab>
                    <Tabs.Tab value="reservation">
                        <Text size="sm">２</Text>
                    </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="request" pt="xs">
                    <Group position="right">○○年○○月○○日　依頼: 関</Group>
                    <InstractionForm
                        resource={resource}
                        form={form}
                        activeTab={activeTab}
                    />
                </Tabs.Panel>

                <Tabs.Panel value="reservation" pt="xs">
                    <Group position="right">○○年○○月○○日　依頼: 亀谷</Group>
                    <InstractionForm
                        resource={resource}
                        form={activeTab}
                        activeTab={activeTab}
                    />
                </Tabs.Panel>
            </Tabs>
        </Box>
    )
}
