import { Box, Grid, Select, TextInput, Textarea } from '@mantine/core'
import { RadioYesNo } from './RadioYesNo'
import { Checkboxes } from './Checkboxes'
import { Field } from '@/common/types'

interface FieldsFourTwelveProps {
    form: any
    fields: Field[]
}

export function FieldsFourTwelve({ form, fields }: FieldsFourTwelveProps) {
    return (
        <Grid>
            {fields?.map((field, index: number) => {
                switch (field.component) {
                    case 'Blank':
                        return <Grid.Col span={6} key={index} />
                    case 'Select':
                        return (
                            <Grid.Col span={6} key={index}>
                                <Select
                                    {...field.props}
                                    {...form.getInputProps(field.formPath)}
                                />
                            </Grid.Col>
                        )
                    case 'TextInput':
                    case 'TextInputLong':
                        return (
                            <Grid.Col
                                span={
                                    field.component === 'TextInputLong' ? 12 : 6
                                }
                                key={index}
                            >
                                <TextInput
                                    {...field.props}
                                    {...form.getInputProps(field.formPath)}
                                />
                            </Grid.Col>
                        )
                    case 'Textarea':
                        return (
                            <Grid.Col span={6} key={index}>
                                <Textarea
                                    {...field.props}
                                    {...form.getInputProps(field.formPath)}
                                />
                            </Grid.Col>
                        )
                    case 'RadioYesNoUnknown':
                        return (
                            <Grid.Col span={6} key={index}>
                                <Box p={12} bg="gray.0">
                                    <RadioYesNo
                                        form={form}
                                        props={field.props}
                                        formPath={field.formPath}
                                        unKnown
                                    />
                                </Box>
                            </Grid.Col>
                        )
                    case 'Checkboxes':
                        return (
                            <Grid.Col span={6} key={index}>
                                <Box p={12} bg="gray.0">
                                    <Checkboxes
                                        form={form}
                                        props={field.props}
                                    />
                                </Box>
                            </Grid.Col>
                        )
                    default:
                        return null
                }
            })}
        </Grid>
    )
}
