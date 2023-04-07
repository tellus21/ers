import { TimeInput } from '@mantine/dates'
import { ExamFormBase } from '../components/ExamFormBase'
import { ExamFieldsEightTwelve } from '../components/ExamFieldsEightTwelve'
import { TitleText } from '../components/TitleText'
import { useReservationInformation } from './useReservationInformationForm'
import { Box, Divider, Group, Space, Stack, Text } from '@mantine/core'

export function ReservationInformationForm() {
    const { logicalName, feature, form, fields } = useReservationInformation()

    return (
        <ExamFormBase feature={feature} form={form}>
            <TitleText title={logicalName} />

            {/* メタデータ */}
            <ExamFieldsEightTwelve form={form} fields={fields.metaData} />

            {/* 診察関連 */}
            <Divider label="診察関連" />
            <ExamFieldsEightTwelve form={form} fields={fields.examination} />

            {/* 送迎関連 */}
            <Divider label="送迎関連" />
            <ExamFieldsEightTwelve form={form} fields={fields.pickUp} />

            {/* FAX関連 */}
            <Divider label="FAX関連" />
            <ExamFieldsEightTwelve form={form} fields={fields.fax} />
        </ExamFormBase>
    )
}
