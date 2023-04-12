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
            <Box px={12}>
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
                <RequestFieldsEightTwelve
                    form={form}
                    fields={fields.metaData}
                />
                {/* CT */}
                <Divider label={'CT'} />
                <Box p={12} pt={24} bg="gray.0">
                    <RequestFieldsEightTwelve
                        form={form}
                        fields={fields.ct_1}
                    />
                </Box>
                <Box p={12} bg="gray.0">
                    <RequestFieldsEightTwelve
                        form={form}
                        fields={fields.ct_2}
                    />
                </Box>
                <Box p={12} pb={24} bg="gray.0">
                    <RequestFieldsEightTwelve
                        form={form}
                        fields={fields.ct_3}
                    />
                </Box>
                {/* MRI */}
                <Divider label={'MRI'} />
                <Box p={12} pt={24} bg="gray.0">
                    <RequestFieldsEightTwelve
                        form={form}
                        fields={fields.mri_1}
                    />
                </Box>
                <Box p={12} bg="gray.0">
                    <RequestFieldsEightTwelve
                        form={form}
                        fields={fields.mri_2}
                    />
                </Box>
                <Box p={12} bg="gray.0">
                    <RequestFieldsEightTwelve
                        form={form}
                        fields={fields.mri_3}
                    />
                </Box>
                <Box p={12} pb={24} bg="gray.0">
                    <RequestFieldsEightTwelve
                        form={form}
                        fields={fields.mri_4}
                    />
                </Box>
                {/* US */}
                <Divider label={'US'} />
                <Box p={12} py={24} bg="gray.0">
                    <RequestFieldsEightTwelve form={form} fields={fields.us} />
                </Box>
                {/* RI*/}
                <Divider label={'RI'} />
                {/* SPECT/シンチグラム */}
                <Text>■SPECT/シンチグラム</Text>
                <Box p={12} py={24} bg="gray.0">
                    <RequestFieldsEightTwelve
                        form={form}
                        fields={fields.spect}
                    />
                </Box>
                <Space h={10} />
                <Group>
                    <Text>■PET/CT</Text>
                    <Text color="red.4">
                        ※３カ月以内にCTを実施した方のみ保険適用可能
                    </Text>
                </Group>
                <Box p={12} bg="gray.0">
                    <RequestFieldsEightTwelve
                        form={form}
                        fields={fields.petCt}
                    />
                </Box>
                <Divider label={'その他検査'} />
                {/* その他検査 */}
                <Space h={10} />
                <Box p={12} py={12} bg="gray.0">
                    <RequestFieldsEightTwelve
                        form={form}
                        fields={fields.etc_1}
                    />
                    <RequestFieldsEightTwelve
                        form={form}
                        fields={fields.etc_2}
                    />
                </Box>
                {/* 主訴・目的 */}
                <Divider label={'主訴・目的'} />
                <Box pl={12}>
                    <RequestFieldsEightTwelve
                        form={form}
                        fields={fields.text}
                    />
                </Box>
                {/* 連絡 */}
                <Box pl={12}>
                    <Divider label={'連絡関連'} />
                    <RequestFieldsEightTwelve
                        form={form}
                        fields={fields.message}
                    />
                </Box>
            </Box>
        </RequestFormBase>
    )
}
