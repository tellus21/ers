import {
    Box,
    Button,
    Grid,
    Group,
    Modal,
    Text,
    createStyles,
} from '@mantine/core'
import { RequestFormBase } from '../components/RequestFormBase'
import { TitleText } from '../components/TitleText'
import { useDisclosure } from '@mantine/hooks'
import { DataTableBase } from '@/pages/components/DataTableBase'
import { compnanies } from './companies'

interface PatientInfomationProps {
    resource: any
    form: any
    fields: any
}

const patient = {
    id: 1,
    home_care_clinic_id: 1,
    home_care_doctor_id: 1,
    nursing_home_id: 1,
    home_karte_number: 'aaa',
    exam_karte_number: null,
    last_name_kana: 'aa',
    first_name_kana: 'aaa',
    last_name: 'aa',
    first_name: 'aaaaaa',
    birthday: '1849-12-31 14:41:01',
    gender: '男',
    created_at: '2023-04-25T07:03:36.000000Z',
    updated_at: '2023-04-25T07:03:36.000000Z',
    deleted_at: null,
    home_care_clinic: {
        id: 1,
        name: 'ffdfd',
        abbreviation: null,
        postal_code: null,
        address: null,
        phone_number: null,
        fax_number: null,
        created_at: '2023-04-25T07:03:19.000000Z',
        updated_at: '2023-04-25T07:03:19.000000Z',
        deleted_at: null,
    },
    home_care_doctor: {
        id: 1,
        name: 'ff',
        created_at: '2023-04-25T07:03:12.000000Z',
        updated_at: '2023-04-25T07:03:12.000000Z',
        deleted_at: null,
    },
    nursing_home: {
        id: 1,
        name: 'a',
        kana: null,
        company_name: null,
        postal_code: null,
        address: null,
        phone_number: null,
        fax_number: null,
        main_contact: null,
        sub_contact: null,
        pickup_time: null,
        created_at: '2023-04-25T07:02:58.000000Z',
        updated_at: '2023-04-25T07:02:58.000000Z',
        deleted_at: null,
    },
}

const patientInformations = [
    { label: '在宅クリニック', data: patient.home_care_clinic.name },
    { label: '主治医', data: patient.home_care_doctor.name },
    { label: 'カルテ番号(在宅)', data: patient.home_karte_number },
    { label: 'カルテ番号(検査)', data: '111(仮)' },
    { label: '姓(フリガナ)', data: patient.last_name_kana },
    { label: '名(フリガナ)', data: patient.first_name_kana },
    { label: '姓', data: patient.last_name },
    { label: '名', data: patient.first_name },
    { label: '生年月日', data: patient.birthday },
    { label: '性別', data: patient.gender },
    { label: '入居施設', data: patient.home_care_clinic.name },
    { label: '電話番号', data: patient.home_care_clinic.phone_number },
    { label: 'FAX番号', data: patient.home_care_clinic.fax_number },
    { label: '郵便番号', data: patient.home_care_clinic.postal_code },
    { label: '住所', data: patient.home_care_clinic.address },
]

const useStyles = createStyles((theme) => ({
    label: { fontSize: theme.fontSizes.xs, color: theme.colors.gray[7] },
    data: {
        fontSize: theme.fontSizes.md,
        borderBottom: '1px solid #cccccc',
    },
}))

export function PatientInfomation({
    resource,
    form,
    fields,
}: PatientInfomationProps) {
    const [opened, { open, close }] = useDisclosure(false)
    const onTableRowClick = (rowData: any) => {
        console.log(rowData)
    }
    const { classes } = useStyles()

    return (
        <RequestFormBase resource={resource} form={form}>
            <Box m={12}>
                <Modal opened={opened} onClose={close} size="xl">
                    <DataTableBase
                        columns={[
                            { accessor: 'name' },
                            { accessor: 'streetAddress' },
                            { accessor: 'city' },
                            { accessor: 'state' },
                        ]}
                        records={compnanies}
                        onRowClick={onTableRowClick}
                    />
                </Modal>

                <TitleText title={'患者'} />

                <Group position="center">
                    <Button onClick={open}>検索</Button>
                </Group>

                <Grid>
                    {patientInformations.map((info, index) => (
                        <Grid.Col
                            span={
                                info.label === '住所' ||
                                info.label === '入居施設'
                                    ? 12
                                    : 6
                            }
                            key={index}
                        >
                            <Text className={classes.label}>{info.label}</Text>
                            <Text className={classes.data}>
                                {info.data || '　'}
                            </Text>
                        </Grid.Col>
                    ))}
                </Grid>
                {/* <FieldsFourTwelve form={form} fields={fields} /> */}
            </Box>
        </RequestFormBase>
    )
}
