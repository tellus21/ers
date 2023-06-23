import { TextInput } from '@mantine/core'
import { useId } from '@mantine/hooks'
import React from 'react'

interface KarteNumberInputProps {
    form: any
    props: any
    formPath: string
}

//　カルテ番号入力用のコンポーネント
// 　　・入力値は6桁の数字
// 　　・入力値はフォームに保存される
export function KarteNumberInput({
    form,
    props,
    formPath,
}: KarteNumberInputProps) {
    const id = useId()
    return (
        <TextInput
            type="number"
            min="000000"
            max="999999"
            step="1"
            pattern="[0-9]{6}"
            onKeyDown={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.target.value.length >= 6) {
                    e.preventDefault()
                }
            }}
            {...props}
            {...form.getInputProps(formPath)}
        />
    )
}
