import { Radio, Group } from '@mantine/core'

interface RadioYesProps {
    form: any
    props: any
    formPath: string
}

export function RadioMorningDaytime({ form, props, formPath }: RadioYesProps) {
    return (
        <Radio.Group
            description="　"
            {...props}
            {...form.getInputProps(formPath)}
        >
            <Group>
                <Radio value="non" label="無し" />
                <Radio value="morning" label="朝" />
                <Radio value="daytime" label="昼" />
                <Radio value="morning_daytime" label="朝・昼" />
            </Group>
        </Radio.Group>
    )
}
