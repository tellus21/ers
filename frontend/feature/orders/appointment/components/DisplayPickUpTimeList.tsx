import { Box, Divider, Group, Stack, Text } from '@mantine/core'
import { useAtomValue } from 'jotai'
import { Patient, usePatientFeature } from '@/feature/patients/patientFeature'
import { editedOrderAtom } from '@/common/contexts'

// パターンのPickUpTimesを表示するコンポーネント
export function DisplayPickUpTimeList() {
    const { query: patients } = usePatientFeature()
    const editedOrder = useAtomValue(editedOrderAtom)
    const displayedPatient = editedOrder.patient
    const patient = patients?.find(
        (patient: Patient) => patient.id === displayedPatient?.id
    )

    // PickupTimesを配列に格納
    const pickupTimes = [
        { name: 'LSI', time: patient?.nursing_home.pickup_time_lsi },
        { name: 'スマイル', time: patient?.nursing_home.pickup_time_smile },
        { name: 'ことに', time: patient?.nursing_home.pickup_time_kotoni },
        { name: 'きた', time: patient?.nursing_home.pickup_time_kita },
        {
            name: 'きた高速',
            time: patient?.nursing_home.pickup_time_kita_highway,
        },
    ]

    // 配列から取得した情報を表示する
    return (
        <Group>
            <Text size="sm">送迎時間</Text>
            <Divider orientation="vertical" />
            {pickupTimes.map((pickupTime, index) => (
                <Box key={index}>
                    <Stack spacing="xs" align="center">
                        <Group spacing="xs">
                            <Text size="xs">{pickupTime.name}</Text>
                            <Box bg="gray.0" p={5}>
                                {pickupTime.time && (
                                    <Text>{pickupTime.time}分</Text>
                                )}
                            </Box>
                            <Divider size="xs" orientation="vertical" />
                        </Group>
                    </Stack>
                </Box>
            ))}
        </Group>
    )
}
