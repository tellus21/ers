import { Box, Divider, Group, Stack, Text } from '@mantine/core'
import { useAtomValue } from 'jotai'
import { editedOrderAtom } from '../../contexts/orderContexts'
import { Patient, usePatientFeature } from '@/feature/patients/patientFeature'

// パターンのPickUpDistancesを表示するコンポーネント
export function DisplayPickUpDistanceList() {
    const { query: patients } = usePatientFeature()
    const editedOrder = useAtomValue(editedOrderAtom)
    const displayedPatient = editedOrder.patient
    const patient = patients?.find(
        (patient: Patient) => patient.id === displayedPatient?.id
    )

    // PickupDistancesを配列に格納
    const pickupDistances = [
        { name: 'LSI', distance: patient?.nursing_home.pickup_distance_lsi },
        {
            name: 'スマイル',
            distance: patient?.nursing_home.pickup_distance_smile,
        },
        {
            name: 'ことに',
            distance: patient?.nursing_home.pickup_distance_kotoni,
        },
        { name: 'きた', distance: patient?.nursing_home.pickup_distance_kita },
        {
            name: 'きた高速',
            distance: patient?.nursing_home.pickup_distance_kita_highway,
        },
    ]

    // 配列から取得した情報を表示する
    return (
        <Group>
            <Text size="sm">送迎距離</Text>
            <Divider orientation="vertical" />
            {pickupDistances.map((pickupDistance, index) => (
                <Box key={index}>
                    <Stack spacing="xs" align="center">
                        <Group spacing="xs">
                            <Text size="xs">{pickupDistance.name}</Text>
                            <Box bg="gray.0" p={5}>
                                {pickupDistance.distance && (
                                    <Text>{pickupDistance.distance}km</Text>
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
