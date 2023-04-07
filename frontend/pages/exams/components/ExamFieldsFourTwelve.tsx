import { Box, Grid, Select, TextInput, Textarea } from '@mantine/core'

import { CheckboxGroup } from './CheckboxGroup'
import { RadioYesNo } from './RadioYesNo'

interface ExamFieldsFourTwelveProps {
    form: any
    fields: { component: string; props: any; formPath: string }[]
}

export function ExamFieldsFourTwelve({
    form,
    fields,
}: ExamFieldsFourTwelveProps) {
    return (
        <Grid>
            {fields?.map((field, index: number) => {
                return field.component === 'Blank' ? (
                    <Grid.Col span={6} key={index} />
                ) : field.component === 'Select' ? (
                    <Grid.Col span={6} key={index}>
                        <Select
                            {...field.props}
                            {...form.getInputProps(field.formPath)}
                        />
                    </Grid.Col>
                ) : field.component === 'TextInput' ? (
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
                ) : // 以下は、componentsフォルダにあるコンポーネントを呼び出している
                field.component === 'RadioYesNoUnknown' ? (
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
                ) : field.component === 'CheckboxGroup' ? (
                    <Grid.Col span={6} key={index}>
                        <Box p={6} bg="gray.0">
                            <CheckboxGroup
                                form={form}
                                props={field.props}
                                formPath={field.formPath}
                            />
                        </Box>
                    </Grid.Col>
                ) : null
            })}
        </Grid>
    )
}
