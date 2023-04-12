import { Divider, Group, Space, Text } from '@mantine/core'
import { ExamFormBase } from '@/pages/requests/components/ExamFormBase'
import { ExamFieldsEightTwelve } from '@/pages/requests/components/ExamFieldsEightTwelve'
import { useInstraction } from './useInstraction'
import { TitleText } from '../components/TitleText'

export function InstractionForm() {
    const { logicalName, resource, form, fields } = useInstraction()

    return (
        <ExamFormBase resource={resource} form={form}>
            <TitleText title={logicalName} />
            {/* メタデータ */}
            {/* {resource}
            <button onClick={() => console.log(form)}>送信テスト</button>
            {(activeTab === 'request' && (
                <ExamFieldsEightTwelve form={form} fields={fields.metaData} />
            )) ||
                (activeTab === 'reservation' && (
                    <ExamFieldsEightTwelve
                        form={form}
                        fields={fields.metaData}
                    />
                ))} */}
            {/* CT */}
            <Divider label={'CT'} />
            <ExamFieldsEightTwelve form={form} fields={fields.ctContrast} />
            <ExamFieldsEightTwelve form={form} fields={fields.ct} />

            {/* MRI */}
            <Divider label={'MRI'} />
            <ExamFieldsEightTwelve form={form} fields={fields.mriContrast} />
            <ExamFieldsEightTwelve form={form} fields={fields.mri} />

            {/* US */}
            <Divider label={'US'} />
            <ExamFieldsEightTwelve form={form} fields={fields.us} />

            {/* RI*/}
            <Divider label={'RI'} />

            {/* SPECT/シンチグラム */}
            {/* <Divider label={'SPECT/シンチグラム'} labelPosition="left" /> */}
            <Text>■SPECT/シンチグラム</Text>
            <ExamFieldsEightTwelve form={form} fields={fields.spect} />

            <Space h={10} />
            <Group>
                <Text>■PET/CT</Text>
                <Text color="red.3">
                    ※３カ月以内にCTを実施した方のみ保険適用可能
                </Text>
            </Group>
            <ExamFieldsEightTwelve form={form} fields={fields.petCt} />

            <Divider label={'その他検査'} />

            {/* その他検査 */}
            <ExamFieldsEightTwelve form={form} fields={fields.etcExams} />

            {/* 採血 */}
            <Space h={10} />
            <ExamFieldsEightTwelve form={form} fields={fields.bloodSample} />

            {/* 主訴・目的 */}
            <Divider label={'主訴・目的'} />
            <ExamFieldsEightTwelve form={form} fields={fields.text} />

            {/* 連絡 */}
            <Divider label={'連絡関連'} />
            <ExamFieldsEightTwelve form={form} fields={fields.message} />
        </ExamFormBase>
    )
}
