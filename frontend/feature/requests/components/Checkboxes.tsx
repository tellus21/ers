import { Checkbox, Group, Text } from '@mantine/core'

interface CheckboxesProps {
    form: any
    props: any
}

export const Checkboxes = ({ form, props }: CheckboxesProps) => (
    <>
        <Text pt={6} pb={12}>
            {props.label}
        </Text>
        <Group>
            {props?.checkboxProps?.map((checkboxProp: any, index: number) => (
                <Checkbox
                    {...checkboxProp}
                    {...form.getInputProps(checkboxProp.formpath, {
                        type: 'checkbox',
                    })}
                    key={index}
                />
            ))}
        </Group>
    </>
)
