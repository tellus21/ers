import { Patient, usePatientFeature } from '@/pages/patients/patientFeature'
import { Box, Divider, Group, Stack, Text } from '@mantine/core'
import { useAtomValue } from 'jotai'
import { editedRequestAtom } from '../../contexts/requestContexts'

// パターンのPickUpTimesを表示するコンポーネント
export function DisplayPickUpTimes() {
    const { query: patients } = usePatientFeature()
    const editedRequest = useAtomValue(editedRequestAtom)
    const displayedPatient = editedRequest.patient
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
