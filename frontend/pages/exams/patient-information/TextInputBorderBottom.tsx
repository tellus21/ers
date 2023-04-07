import { createStyles, TextInput } from '@mantine/core'

const useStyles = createStyles((theme) => ({
    label: { fontSize: theme.fontSizes.xs, color: theme.colors.gray[9] },
    input: {
        fontSize: theme.fontSizes.sm,
        borderBottom: '1px solid #cccccc',
    },
}))

interface TextInputBorderBottomProps {
    label: string
    value: string
}

export function TextInputBorderBottom({
    label,
    value,
}: TextInputBorderBottomProps) {
    const { classes } = useStyles()
    return (
        <TextInput
            classNames={{
                label: classes.label,
                input: classes.input,
            }}
            variant="unstyled"
            label={label}
            defaultValue={value}
            size="xs"
        />
    )
}
