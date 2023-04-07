import {
    Box,
    Center,
    Checkbox,
    Grid,
    Group,
    NumberInput,
    Select,
    TextInput,
    Textarea,
} from '@mantine/core'
import { RadioYesNo } from './RadioYesNo'
import { CheckboxGroup } from './CheckboxGroup'
import { DatePickerInput, MonthPickerInput, TimeInput } from '@mantine/dates'
import { IconCalendar, IconClock } from '@tabler/icons-react'
import { DisplayPickUpTimeList } from './DisplayPickUpTimeList'
import { RadioMorningDaytime } from '../direction/RadioMorningDaytime'

interface ExamFieldsEightTwelveProps {
    form: any
    fields: any
    disabled?: boolean
}

export function ExamFieldsEightTwelve({
    form,
    fields,
    disabled,
}: ExamFieldsEightTwelveProps) {
    return (
        <Grid columns={24}>
            {fields?.map((field: any, index: number) => {
                return field.component === 'Blank' ? (
                    <Grid.Col span={4} key={index} />
                ) : field.component === 'Select' ? (
                    <Grid.Col span={4} key={index}>
                        <Select
                            disabled={disabled}
                            {...field.props}
                            {...form.getInputProps(field.formPath)}
                        />
                    </Grid.Col>
                ) : field.component === 'TextInput' ? (
                    <Grid.Col span={4} key={index}>
                        <TextInput
                            {...field.props}
                            {...form.getInputProps(field.formPath)}
                        />
                    </Grid.Col>
                ) : field.component === 'NumberInput' ? (
                    <Grid.Col span={4} key={index}>
                        <NumberInput
                            {...field.props}
                            {...form.getInputProps(field.formPath)}
                        />
                    </Grid.Col>
                ) : field.component === 'MonthPickerInput' ? (
                    <Grid.Col span={4} key={index}>
                        <MonthPickerInput
                            disabled={disabled}
                            icon={<IconCalendar size="1.1rem" stroke={1.5} />}
                            {...field.props}
                            {...form.getInputProps(field.formPath)}
                        />
                    </Grid.Col>
                ) : field.component === 'DatePickerInput' ? (
                    <Grid.Col span={4} key={index}>
                        <DatePickerInput
                            icon={<IconCalendar size="1.1rem" stroke={1.5} />}
                            {...field.props}
                            {...form.getInputProps(field.formPath)}
                        />
                    </Grid.Col>
                ) : field.component === 'TimeInput' ? (
                    <Grid.Col span={4} key={index}>
                        <TimeInput
                            icon={<IconClock size="1rem" stroke={1.5} />}
                            {...field.props}
                            {...form.getInputProps(field.formPath)}
                        />
                    </Grid.Col>
                ) : field.component === 'Textarea' ? (
                    <Grid.Col span={24} key={index}>
                        <Textarea
                            {...field.props}
                            {...form.getInputProps(field.formPath)}
                        />
                    </Grid.Col>
                ) : field.component === 'Checkbox' ? (
                    <Grid.Col span={24} key={index}>
                        <Center>
                            <Checkbox
                                {...field.props}
                                {...(form.getInputProps(field.formPath),
                                { type: 'checkbox' })}
                            />
                        </Center>
                    </Grid.Col>
                ) : // 以下は、componentsフォルダにあるコンポーネントを呼び出している
                field.component === 'RadioYesNo' ? (
                    <Grid.Col span={4} key={index}>
                        <Box p={6} bg="gray.0">
                            <RadioYesNo
                                form={form}
                                props={field.props}
                                formPath={field.formPath}
                            />
                        </Box>
                    </Grid.Col>
                ) : field.component === 'RadioMorningDaytime' ? (
                    <Grid.Col span={6} key={index}>
                        <Box p={6} bg="gray.0">
                            <RadioMorningDaytime
                                form={form}
                                props={field.props}
                                formPath={field.formPath}
                            />
                        </Box>
                    </Grid.Col>
                ) : field.component === 'PickUpTimeList' ? (
                    <Grid.Col span={16} key={index}>
                        <DisplayPickUpTimeList homeClinics={field.props.data} />
                    </Grid.Col>
                ) : field.component === 'CheckboxGroup' ? (
                    <Grid.Col span={24} key={index}>
                        <Box p={6} bg="gray.0">
                            <CheckboxGroup
                                form={form}
                                props={field.props}
                                formPath={field.formPath}
                                select={field.select}
                                textInput={field.textInput}
                            />
                        </Box>
                    </Grid.Col>
                ) : null
            })}
        </Grid>
    )
}
