import { Checkbox, Group, Select, Text, TextInput } from '@mantine/core'

interface CheckboxGroupProps {
    form: any
    props: any
    formPath: string
    select?: {
        props: {
            label: string
            data: []
            formPath: string
        }
    }
    textInput?: { props: { Label: string; formPath: string } }
}

export function CheckboxGroup({
    form,
    props,
    formPath,
    select,
    textInput,
}: CheckboxGroupProps) {
    return (
        <Checkbox.Group
            description="　"
            {...props}
            {...form.getInputProps(formPath)}
        >
            <Group>
                {props?.children.map((child: any, index: number) => {
                    return (
                        <Checkbox
                            value={child.value}
                            label={child.label}
                            key={index}
                        />
                    )
                })}
                {select && (
                    <>
                        <Select
                            {...select.props}
                            {...form.getInputProps(select.props.formPath)}
                        />
                    </>
                )}
                {textInput && (
                    <>
                        <Text>{textInput.props.Label}</Text>
                        <TextInput
                            w={140}
                            {...form.getInputProps(textInput.props.formPath)}
                        />
                    </>
                )}
            </Group>
        </Checkbox.Group>
    )
}
