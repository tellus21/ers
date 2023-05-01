import { Checkbox, Group, Text } from '@mantine/core'

interface CheckboxesProps {
    form: any
    props: {
        label: string
        checkboxProps: {
            label: string
            formPath: string
        }[]
    }
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
