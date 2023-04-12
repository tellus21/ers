import { Box, Grid, Select, TextInput, Textarea } from '@mantine/core'
import { CheckboxGroup } from './CheckboxGroup'
import { RadioYesNo } from './RadioYesNo'
import { Field } from '@/common/types'

interface RequestFieldsFourTwelveProps {
    form: any
    fields: Field[]
}

export function RequestFieldsFourTwelve({
    form,
    fields,
}: RequestFieldsFourTwelveProps) {
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
                    case 'RadioYesNoUnknown':
                        return (
                            <Grid.Col span={6} key={index}>
                                <Box p={6} bg="gray.0">
                                    <RadioYesNo
                                        form={form}
                                        props={field.props}
                                        formPath={field.formPath}
                                        unKnown
                                    />
                                </Box>
                            </Grid.Col>
                        )
                    case 'CheckboxGroup':
                        return (
                            <Grid.Col span={6} key={index}>
                                <Box p={6} bg="gray.0">
                                    <CheckboxGroup
                                        form={form}
                                        props={field.props}
                                        formPath={field.formPath}
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
