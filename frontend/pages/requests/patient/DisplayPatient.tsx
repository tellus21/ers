import { Box, Grid, Text, createStyles } from '@mantine/core'
import { TitleText } from '../components/TitleText'
import { useAtomValue } from 'jotai'
import { editedRequestAtom } from '../contexts/requestContexts'
import { info } from 'console'

const useStyles = createStyles((theme) => ({
    label: { fontSize: theme.fontSizes.xs, color: theme.colors.gray[7] },
    data: {
        fontSize: theme.fontSizes.md,
        borderBottom: '1px solid #cccccc',
    },
}))

export function DisplayPatient() {
    const { classes } = useStyles()
    const editedRequest = useAtomValue(editedRequestAtom)
    const displayedPatient = editedRequest.patient
    const displayedPatientNursingHome = displayedPatient?.nursing_home

    // 患者情報を表示するための配列
    const patientInformations = [
        {
            label: '在宅クリニック',
            data: displayedPatient?.home_care_clinic?.name,
        },
        { label: '主治医', data: displayedPatient?.home_care_doctor?.name },
        {
            label: 'カルテ番号(在宅)',
            data: displayedPatient?.karte_number_home,
        },
        {
            label: '空欄',
        },
        { label: '姓(フリガナ)', data: displayedPatient?.last_name_kana },
        { label: '名(フリガナ)', data: displayedPatient?.first_name_kana },
        { label: '姓', data: displayedPatient?.last_name },
        { label: '名', data: displayedPatient?.first_name },
        { label: '生年月日', data: displayedPatient?.birthday },
        { label: '性別', data: displayedPatient?.gender },
        { label: '入居施設', data: displayedPatientNursingHome?.name },
        {
            label: '電話番号',
            data: displayedPatientNursingHome?.phone_number,
        },
        {
            label: 'FAX番号',
            data: displayedPatientNursingHome?.fax_number,
        },
        {
            label: '郵便番号',
            data: displayedPatientNursingHome?.postal_code,
        },
        { label: '住所', data: displayedPatientNursingHome?.address },
        {
            label: 'カルテ番号(LSI)',
            data: displayedPatient?.karte_number_lsi,
        },
        {
            label: 'カルテ番号(スマイル)',
            data: displayedPatient?.karte_number_smile,
        },
        {
            label: 'カルテ番号(ことに)',
            data: displayedPatient?.karte_number_kotoni,
        },
        {
            label: 'カルテ番号(きた)',
            data: displayedPatient?.karte_number_kita,
        },
    ]

    // 患者情報を表示するコンポーネントを返す
    return (
        <Box m={12}>
            <TitleText title={'対象患者'} />

            <Grid>
                {patientInformations.map(
                    (information, index) =>
                        (information.label === '空欄' && (
                            <Grid.Col span={6} key={index} />
                        )) || (
                            <Grid.Col
                                span={
                                    information.label === '住所' ||
                                    information.label === '入居施設'
                                        ? 12
                                        : 6
                                }
                                key={index}
                            >
                                <Text className={classes.label}>
                                    {information.label}
                                </Text>

                                <Text className={classes.data}>
                                    {information.data || '　'}
                                </Text>
                            </Grid.Col>
                        )
                )}
            </Grid>
        </Box>
    )
}
