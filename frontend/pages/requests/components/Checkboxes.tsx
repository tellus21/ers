import { Checkbox, Group, Text } from '@mantine/core'

interface CheckboxProps {
    label: string
    checkboxProps: {
        formPath: string
        label: string
    }[]
}

interface CheckboxesProps {
    form: any
    props: CheckboxProps
}

export const Checkboxes = ({ form, props }: CheckboxesProps) => (
    <>
        <Text pt={6} pb={12}>
            {props.label}
        </Text>
        <Group>
            {props?.checkboxProps?.map((checkboxProp, index) => (
                <Checkbox
                    {...checkboxProp}
                    {...form.getInputProps(checkboxProp.formPath)}
                    key={index}
                />
            ))}
        </Group>
    </>
)
