import { Box, Grid, Text, createStyles } from '@mantine/core'
import { TitleText } from '../components/TitleText'
import { useAtomValue } from 'jotai'
import { editedRequestAtom } from '../../../common/contexts'

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

    // 患者情報を表示するための配列
    const patientInformations = [
        {
            label: '在宅クリニック',
            data: displayedPatient.home_care_clinic?.name,
        },
        { label: '主治医', data: displayedPatient.home_care_doctor?.name },
        { label: 'カルテ番号(在宅)', data: displayedPatient.home_karte_number },
        { label: 'カルテ番号(検査)', data: '111(仮)' },
        { label: '姓(フリガナ)', data: displayedPatient.last_name_kana },
        { label: '名(フリガナ)', data: displayedPatient.first_name_kana },
        { label: '姓', data: displayedPatient.last_name },
        { label: '名', data: displayedPatient.first_name },
        { label: '生年月日', data: displayedPatient.birthday },
        { label: '性別', data: displayedPatient.gender },
        { label: '入居施設', data: displayedPatient.home_care_clinic?.name },
        {
            label: '電話番号',
            data: displayedPatient.home_care_clinic?.phone_number,
        },
        {
            label: 'FAX番号',
            data: displayedPatient.home_care_clinic?.fax_number,
        },
        {
            label: '郵便番号',
            data: displayedPatient.home_care_clinic?.postal_code,
        },
        { label: '住所', data: displayedPatient.home_care_clinic?.address },
    ]

    // 患者情報を表示するコンポーネントを返す
    return (
        <Box m={12}>
            <TitleText title={'対象患者'} />

            <Grid>
                {patientInformations.map((information, index) => (
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
                ))}
            </Grid>
        </Box>
    )
}
