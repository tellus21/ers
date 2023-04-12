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
                switch (field.component) {
                    case 'TextInput':
                        return (
                            <Grid.Col span={6} key={index}>
                                <TextInput
                                    {...field.props}
                                    {...form.getInputProps(field.formPath)}
                                />
                            </Grid.Col>
                        )
                    case 'TextInputLong':
                        return (
                            <Grid.Col span={12} key={index}>
                                <TextInput
                                    {...field.props}
                                    {...form.getInputProps(field.formPath)}
                                />
                            </Grid.Col>
                        )
                    case 'Textarea':
                        return (
                            <Grid.Col span={12} key={index}>
                                <Textarea
                                    {...field.props}
                                    {...form.getInputProps(field.formPath)}
                                />
                            </Grid.Col>
                        )
                    case 'Select':
                        return (
                            <Grid.Col span={6} key={index}>
                                <Select
                                    {...field.props}
                                    {...form.getInputProps(field.formPath)}
                                />
                            </Grid.Col>
                        )
                    case 'DateInput':
                        return (
                            <Grid.Col span={6} key={index}>
                                <DateInput
                                    icon={
                                        <IconCalendar
                                            size="1.1rem"
                                            stroke={1.5}
                                        />
                                    }
                                    {...field.props}
                                    {...form.getInputProps(field.formPath)}
                                />
                            </Grid.Col>
                        )
                    case 'RadioYesNo':
                        return (
                            <Grid.Col span={6} key={index}>
                                <RadioYesNo {...field.props} />
                            </Grid.Col>
                        )
                    case 'Checkbox':
                        return (
                            <Box my={30} p={2}>
                                <Checkbox
                                    size="sm"
                                    {...field.props}
                                    {...form.getInputProps(field.formPath, {
                                        type: 'checkbox',
                                    })}
                                />
                            </Box>
                        )
                    case 'Blank':
                        return <Grid.Col span={6} key={index} />
                    case 'BlankLong':
                        return <Grid.Col span={12} key={index} />
                    default:
                        return null
                }
            })}
        </Grid>
    )
}
