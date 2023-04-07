import { Button, Center, Grid } from '@mantine/core'
import { TextInputBorderBottom } from './TextInputBorderBottom'

import { patientInformationData } from './patientInformationData'
import { TitleText } from '../components/TitleText'

export function PatientInformation() {
    const data = patientInformationData

    return (
        <>
            <TitleText title="患者情報" />
            <Center>
                <Button>検索</Button>
            </Center>
            <Grid gutter={10}>
                {data.map((item: any, index: number) => {
                    return (
                        <Grid.Col span={6} key={index}>
                            <TextInputBorderBottom
                                label={item.label}
                                value={item.value}
                            />
                        </Grid.Col>
                    )
                })}
            </Grid>
        </>
    )
}
