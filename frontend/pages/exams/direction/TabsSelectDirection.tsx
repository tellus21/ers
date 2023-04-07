import { Box, Center, Group, Tabs, Text } from '@mantine/core'

import { useForm } from '@mantine/form'
import { DirectionForm } from './DirectionForm'

import { TitleText } from '../components/TitleText'
import { useState } from 'react'
import { useRequest } from './useRequest'
import { useReservation } from './useReservation'

export function TabsSelectDirection() {
    const [activeTab, setActiveTab] = useState<string | null>('request')
    const requestFeature = 'request'
    const reservationFeature = 'reservation'
    const { feature: reauests, form: requestForm } = useRequest()
    const { feature: reservations, form: reservationForm } = useReservation()

    return (
        <Box>
            <TitleText title="指示内容" />

            <Tabs value={activeTab} onTabChange={setActiveTab}>
                <Tabs.List position="center">
                    <Tabs.Tab value="request">
                        <Center>
                            <Text size="sm">依頼</Text>
                        </Center>
                    </Tabs.Tab>
                    <Tabs.Tab value="reservation">
                        <Text size="sm">予約</Text>
                    </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="request" pt="xs">
                    <Group position="right">○○年○○月○○日　依頼: 関</Group>
                    <DirectionForm
                        feature={reauests}
                        form={requestForm}
                        activeTab={activeTab}
                    />
                </Tabs.Panel>

                <Tabs.Panel value="reservation" pt="xs">
                    <Group position="right">○○年○○月○○日　依頼: 亀谷</Group>
                    <DirectionForm
                        feature={reservations}
                        form={reservationForm}
                        activeTab={activeTab}
                    />
                </Tabs.Panel>
            </Tabs>
        </Box>
    )
}
