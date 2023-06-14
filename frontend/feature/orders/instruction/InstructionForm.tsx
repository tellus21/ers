import { Box, Divider, Space, Tabs, Text } from '@mantine/core'
import { TitleText } from '../components/TitleText'
import { OrderFormBase } from '../components/OrderFormBase'
import { FieldsEightTwelve } from '../components/FieldsEightTwelve'

interface InstructionFormProps {
    logicalName: string
    resource: any
    form: any
    query: any
    fields: any
}

export function InstructionForm({
    logicalName,
    resource,
    form,
    query,
    fields,
}: InstructionFormProps) {
    return (
        <OrderFormBase resource={resource} form={form} query={query}>
            <Box px={12}>
                <TitleText title={logicalName} />
                <Tabs defaultValue="gallery">
                    <Tabs.List position="center">
                        <Tabs.Tab value="gallery">
                            <Text size="md">①</Text>
                        </Tabs.Tab>
                        <Tabs.Tab value="messages">
                            <Text size="md">②</Text>
                        </Tabs.Tab>
                        <Tabs.Tab value="settings">
                            <Text size="md">③</Text>
                        </Tabs.Tab>
                    </Tabs.List>
                    {/* メタデータ */}

                    {/* <Tabs.Panel value="1" pt="xs"></Tabs.Panel>
                    <Tabs.Panel value="2" pt="xs"></Tabs.Panel>
                    <Tabs.Panel value="3" pt="xs"></Tabs.Panel> */}
                </Tabs>

                {/* メタデータ */}
                <Divider label={'基本情報'} />
                <Box p={12} pt={24} bg="gray.0">
                    <FieldsEightTwelve form={form} fields={fields.metaData} />
                </Box>

                {/* CT */}
                <Divider label={'CT'} />
                <Box p={12} pt={6}>
                    <FieldsEightTwelve form={form} fields={fields.ct_1} />
                </Box>
                <Box p={12} pt={18} bg="gray.0">
                    <FieldsEightTwelve form={form} fields={fields.ct_2} />
                </Box>
                <Box p={12} pb={24} bg="gray.0">
                    <FieldsEightTwelve form={form} fields={fields.ct_3} />
                </Box>

                {/* MRI */}
                <Divider label={'MRI'} />
                <Box p={12} pt={6}>
                    <FieldsEightTwelve form={form} fields={fields.mri_1} />
                </Box>
                <Box p={12} pt={18} bg="gray.0">
                    <FieldsEightTwelve form={form} fields={fields.mri_2} />
                </Box>
                <Box p={12} bg="gray.0">
                    <FieldsEightTwelve form={form} fields={fields.mri_3} />
                </Box>
                <Box p={12} pb={24} bg="gray.0">
                    <FieldsEightTwelve form={form} fields={fields.mri_4} />
                </Box>

                {/* US */}
                <Divider label={'US'} />
                <Box p={12} py={24} bg="gray.0">
                    <FieldsEightTwelve form={form} fields={fields.us} />
                </Box>

                {/* RI*/}
                <Divider label={'RI'} />

                {/* SPECT/シンチグラム */}
                <Text>■SPECT/シンチグラム</Text>
                <Box p={12} py={24} bg="gray.0">
                    <FieldsEightTwelve form={form} fields={fields.spect} />
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

                    <FieldsEightTwelve form={form} fields={fields.petCt} />
                </Box>
                <Divider label={'その他検査'} />

                {/* その他検査 */}
                <Box p={12} pt={18} pb={12} bg="gray.0">
                    <FieldsEightTwelve form={form} fields={fields.etc_1} />
                    <FieldsEightTwelve form={form} fields={fields.etc_2} />
                </Box>

                {/* 主訴・目的 */}
                <Divider label={'主訴・目的'} />
                <Box pl={12}>
                    <FieldsEightTwelve form={form} fields={fields.text} />
                </Box>

                {/* 連絡 */}
                <Box pl={12}>
                    <Divider label={'連絡関連'} />
                    <FieldsEightTwelve form={form} fields={fields.contact} />
                    <Text color="red.6">
                        ※診療情報提供書には表示されません。
                    </Text>
                </Box>
            </Box>
        </OrderFormBase>
    )
}
