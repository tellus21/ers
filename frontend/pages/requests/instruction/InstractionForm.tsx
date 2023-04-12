import { Box, Divider, Flex, Group, Space, Text } from '@mantine/core'
import { RequestFormBase } from '@/pages/requests/components/RequestFormBase'
import { RequestFieldsEightTwelve } from '@/pages/requests/components/RequestFieldsEightTwelve'
import { useInstraction } from './useInstraction'
import { TitleText } from '../components/TitleText'

export function InstractionForm() {
    const { logicalName, resource, form, fields } = useInstraction()

    return (
        <RequestFormBase resource={resource} form={form}>
            <TitleText title={logicalName} />
            {/* メタデータ */}
            {/* {resource}
            <button onClick={() => console.log(form)}>送信テスト</button>
            {(activeTab === 'request' && (
                <RequestFieldsEightTwelve form={form} fields={fields.metaData} />
            )) ||
                (activeTab === 'reservation' && (
                    <RequestFieldsEightTwelve
                        form={form}
                        fields={fields.metaData}
                    />
                ))} */}
            １と２のタブで表示を切り替える 記載者〇〇、記載日〇〇
            <RequestFieldsEightTwelve form={form} fields={fields.metaData} />
            {/* CT */}
            <Divider label={'CT'} />
            <Box p={24} bg="gray.0">
                <RequestFieldsEightTwelve
                    form={form}
                    fields={fields.ctContrast}
                />
                <RequestFieldsEightTwelve form={form} fields={fields.ct} />
            </Box>
            {/* MRI */}
            <Divider label={'MRI'} />
            <Box p={24} bg="gray.0">
                <RequestFieldsEightTwelve
                    form={form}
                    fields={fields.mriContrast}
                />
                <RequestFieldsEightTwelve form={form} fields={fields.mri} />
            </Box>
            {/* US */}
            <Divider label={'US'} />
            <Box p={24} bg="gray.0">
                <RequestFieldsEightTwelve form={form} fields={fields.us} />
            </Box>
            {/* RI*/}
            <Divider label={'RI'} />
            {/* SPECT/シンチグラム */}
            <Text pl={24}>■SPECT/シンチグラム</Text>
            <Box p={24} bg="gray.0">
                <RequestFieldsEightTwelve form={form} fields={fields.spect} />
            </Box>
            <Space h={10} />
            <Group pl={24}>
                <Text>■PET/CT</Text>
                <Text color="red.3">
                    ※３カ月以内にCTを実施した方のみ保険適用可能
                </Text>
            </Group>
            <Box pt={12} pl={24} bg="gray.0">
                <RequestFieldsEightTwelve form={form} fields={fields.petCt} />
            </Box>
            <Divider label={'その他検査'} />
            {/* その他検査 */}
            <Space h={10} />
            <Box pl={24} bg="gray.0">
                <RequestFieldsEightTwelve
                    form={form}
                    fields={fields.etcExams}
                />
            </Box>
            {/* 採血 */}
            <Space h={24} />
            <Flex pl={24} bg="gray.0" align="center">
                <RequestFieldsEightTwelve
                    form={form}
                    fields={fields.bloodSample}
                />
            </Flex>
            {/* 主訴・目的 */}
            <Divider label={'主訴・目的'} />
            <RequestFieldsEightTwelve form={form} fields={fields.text} />
            {/* 連絡 */}
            <Divider label={'連絡関連'} />
            <RequestFieldsEightTwelve form={form} fields={fields.message} />
        </RequestFormBase>
    )
}
