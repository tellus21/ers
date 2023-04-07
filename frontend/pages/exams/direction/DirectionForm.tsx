import { ChangeEvent, useState } from 'react'

import { ExamFormBase } from '../components/ExamFormBase'
import { Box, Divider, Group, Space, Text } from '@mantine/core'
import { DividerCheckbox } from './_DividerCheckbox'
import { useDirectionForm } from './useDirectionForm'
import { ExamFieldsEightTwelve } from '../components/ExamFieldsEightTwelve'

interface DirectionFormProps {
    feature: string
    form: any
    activeTab: string | null
}

export function DirectionForm({
    feature,
    form,
    activeTab,
}: DirectionFormProps) {
    const { fields } = useDirectionForm()

    return (
        <ExamFormBase feature={feature} form={form}>
            {/* メタデータ */}
            {feature}
            <button onClick={() => console.log(form)}>送信テスト</button>
            {(activeTab === 'request' && (
                <ExamFieldsEightTwelve
                    form={form}
                    fields={fields.metaData}
                    disabled={false}
                />
            )) ||
                (activeTab === 'reservation' && (
                    <ExamFieldsEightTwelve
                        form={form}
                        fields={fields.metaData}
                        disabled={true}
                    />
                ))}
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
