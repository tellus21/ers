import {
    Box,
    Checkbox,
    Grid,
    NumberInput,
    Select,
    Text,
    TextInput,
    Textarea,
} from '@mantine/core'
import { DatePickerInput, MonthPickerInput, TimeInput } from '@mantine/dates'
import { IconCalendarTime, IconClock } from '@tabler/icons-react'
import { Field } from '@/common/types'
import { KarteNumberInput } from '@/pages/components/KarteNumberInput'
import { DisplayPickUpTimeList } from '../appointment/components/DisplayPickUpTimeList'
import { RadioYesNo } from './RadioYesNo'
import { RadioMorningDaytime } from '../instruction/components/RadioMorningDaytime'

interface FieldsEightTwelveProps {
    form: any
    fields: Field[]
    disabled?: boolean
}
export function FieldsEightTwelve({ form, fields }: FieldsEightTwelveProps) {
    return (
        <Grid columns={24}>
            {fields?.map((field: any, index: number) => {
                switch (field.component) {
                    case 'Checkbox':
                        return (
                            <Checkbox
                                key={index}
                                p={6}
                                {...field.props}
                                {...form.getInputProps(field.formPath, {
                                    type: 'checkbox',
                                })}
                            />
                        )
                    case 'Text':
                        return <Text key={index} p={6} {...field.props}></Text>
                    case 'etcTextInput':
                        return (
                            <TextInput
                                key={index}
                                {...field.props}
                                {...form.getInputProps(field.formPath)}
                            />
                        )
                    case 'Blank':
                        return <Grid.Col span={4} key={index} />
                    case 'Select':
                        return (
                            <Grid.Col span={4} key={index}>
                                <Select
                                    {...field.props}
                                    {...form.getInputProps(field.formPath)}
                                />
                            </Grid.Col>
                        )
                    case 'TextInput':
                        return (
                            <Grid.Col span={4} key={index}>
                                <TextInput
                                    {...field.props}
                                    {...form.getInputProps(field.formPath)}
                                />
                            </Grid.Col>
                        )
                    case 'NumberInput':
                        return (
                            <Grid.Col span={4} key={index}>
                                <NumberInput
                                    {...field.props}
                                    {...form.getInputProps(field.formPath)}
                                />
                            </Grid.Col>
                        )
                    case 'MonthPickerInput':
                        return (
                            <Grid.Col span={4} key={index}>
                                <MonthPickerInput
                                    icon={
                                        <IconCalendarTime
                                            size="1.1rem"
                                            stroke={1.5}
                                        />
                                    }
                                    {...field.props}
                                    {...form.getInputProps(field.formPath)}
                                />
                            </Grid.Col>
                        )
                    case 'DatePickerInput':
                        return (
                            <Grid.Col span={4} key={index}>
                                <DatePickerInput
                                    icon={
                                        <IconCalendarTime
                                            size="1.1rem"
                                            stroke={1.5}
                                        />
                                    }
                                    {...field.props}
                                    {...form.getInputProps(field.formPath)}
                                />
                            </Grid.Col>
                        )
                    case 'TimeInput':
                        return (
                            <Grid.Col span={4} key={index}>
                                <TimeInput
                                    icon={
                                        <IconClock size="1rem" stroke={1.5} />
                                    }
                                    {...field.props}
                                    {...form.getInputProps(field.formPath)}
                                />
                            </Grid.Col>
                        )
                    case 'Textarea':
                        return (
                            <Grid.Col span={24} key={index}>
                                <Textarea
                                    {...field.props}
                                    {...form.getInputProps(field.formPath)}
                                />
                            </Grid.Col>
                        )
                    case 'RadioYesNo':
                        return (
                            <Grid.Col span={6} key={index}>
                                <RadioYesNo
                                    form={form}
                                    props={field.props}
                                    formPath={field.formPath}
                                />
                            </Grid.Col>
                        )
                    case 'RadioMorningDaytime':
                        return (
                            <Grid.Col span={6} key={index}>
                                <Box p={12} bg="gray.0">
                                    <RadioMorningDaytime
                                        form={form}
                                        props={field.props}
                                        formPath={field.formPath}
                                    />
                                </Box>
                            </Grid.Col>
                        )
                    case 'PickUpTimeList':
                        return (
                            <Grid.Col span={16} key={index}>
                                <DisplayPickUpTimeList
                                    homeClinics={field.props.data}
                                />
                            </Grid.Col>
                        )
                    case 'KarteNumberInput':
                        return (
                            <Grid.Col span={4} key={index}>
                                <KarteNumberInput
                                    form={form}
                                    props={field.props}
                                    formPath={field.formPath}
                                />
                            </Grid.Col>
                        )

                    default:
                        return null
                }
            })}
        </Grid>
    )
}
