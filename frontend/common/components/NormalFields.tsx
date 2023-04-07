import { Box, Checkbox, Grid, Select, Textarea, TextInput } from '@mantine/core'
import { DateInput } from '@mantine/dates'
import { IconCalendar } from '@tabler/icons-react'
import { RadioYesNo } from '../../pages/exams/components/RadioYesNo'

interface NormalFieldsProps {
    form: any
    fields: any
}

export function NormalFields({ form, fields }: NormalFieldsProps) {
    return (
        <Grid gutter={15}>
            {fields?.map((field: any, index: number) => {
                return field.component === 'TextInput' ? (
                    <Grid.Col span={6} key={index}>
                        <TextInput
                            {...field.props}
                            {...form.getInputProps(field.formPath)}
                        />
                    </Grid.Col>
                ) : field.component === 'TextInputLong' ? (
                    <Grid.Col span={12} key={index}>
                        <TextInput
                            {...field.props}
                            {...form.getInputProps(field.formPath)}
                        />
                    </Grid.Col>
                ) : field.component === 'Textarea' ? (
                    <Grid.Col span={12} key={index}>
                        <Textarea
                            {...field.props}
                            {...form.getInputProps(field.formPath)}
                        />
                    </Grid.Col>
                ) : field.component === 'Select' ? (
                    <Grid.Col span={6} key={index}>
                        <Select
                            {...field.props}
                            {...form.getInputProps(field.formPath)}
                        />
                    </Grid.Col>
                ) : field.component === 'DateInput' ? (
                    <Grid.Col span={6} key={index}>
                        <DateInput
                            icon={<IconCalendar size="1.1rem" stroke={1.5} />}
                            {...field.props}
                            {...form.getInputProps(field.formPath)}
                        />
                    </Grid.Col>
                ) : field.component === 'RadioYesNo' ? (
                    <Grid.Col span={6} key={index}>
                        <RadioYesNo {...field.props} />
                    </Grid.Col>
                ) : field.component === 'Checkbox' ? (
                    <Box my={30} p={2}>
                        <Checkbox
                            size="sm"
                            {...field.props}
                            {...form.getInputProps(field.formPath, {
                                type: 'checkbox',
                            })}
                        />
                    </Box>
                ) : field.component === 'Blank' ? (
                    <Grid.Col span={6} key={index} />
                ) : field.component === 'BlankLong' ? (
                    <Grid.Col span={12} key={index} />
                ) : null
            })}
        </Grid>
    )
}
