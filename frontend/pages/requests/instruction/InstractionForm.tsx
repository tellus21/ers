import {
    Box,
    Center,
    Divider,
    Flex,
    Group,
    Space,
    Tabs,
    Text,
} from '@mantine/core'
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
                <Tabs defaultValue="gallery">
                    <Tabs.List position="center">
                        <Tabs.Tab value="gallery">①</Tabs.Tab>
                        <Tabs.Tab value="messages">②</Tabs.Tab>
                        <Tabs.Tab value="settings">③</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="gallery" pt="xs"></Tabs.Panel>

                    <Tabs.Panel value="messages" pt="xs"></Tabs.Panel>

                    <Tabs.Panel value="settings" pt="xs"></Tabs.Panel>
                </Tabs>
                <Group position="right">
                    <Text size="md">最終更新日、記載者：○○</Text>
                </Group>
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
                <Text>■PET/CT</Text>
                <Box p={12} bg="gray.0">
                    <Text color="red.6">
                        ※３カ月以内にCTを実施した方のみ保険適用可能です。
                    </Text>
                    <Text color="red.6">
                        ※検査当日に食事や血糖降下薬の服用(インシュリン注射も含む)等を行うと検査中止になります。
                    </Text>

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
                        fields={fields.contact}
                    />
                </Box>
            </Box>
        </RequestFormBase>
    )
}
