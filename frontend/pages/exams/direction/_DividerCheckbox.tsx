import { Checkbox, Divider } from '@mantine/core'
import { ChangeEvent } from 'react'

interface DividerCheckboxProps {
    checkboxLabel: string
    checked: boolean
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

// Dividerの中のcheckbox
export function DividerCheckbox({
    checkboxLabel,
    checked,
    onChange,
}: DividerCheckboxProps) {
    const internalCheckbox = (
        <Checkbox
            label={checkboxLabel}
            checked={checked}
            onChange={onChange}
            size="sm"
        />
    )

    return <Divider my="xs" label={internalCheckbox} labelPosition="center" />
}
