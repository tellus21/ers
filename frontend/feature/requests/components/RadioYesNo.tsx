import { Radio, Group } from '@mantine/core'

interface RadioYesProps {
    form: any
    props: any
    formPath: string | undefined
    unKnown?: boolean
}

export const RadioYesNo = ({
    form,
    props,
    formPath,
    unKnown,
}: RadioYesProps) => (
    <Radio.Group description="　" {...props} {...form.getInputProps(formPath)}>
        <Group>
            {unKnown && <Radio value="unKnown" label="不明" />}
            <Radio value="no" label="無" />
            <Radio value="yes" label="有" />
        </Group>
    </Radio.Group>
)
