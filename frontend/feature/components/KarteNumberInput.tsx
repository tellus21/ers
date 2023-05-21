import { Input } from '@mantine/core'
import { useId } from '@mantine/hooks'
import { IMaskInput } from 'react-imask'

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
        <Input.Wrapper id={id} {...props} {...form.getInputProps(formPath)}>
            <Input<any> component={IMaskInput} mask="000000" id={id} />
        </Input.Wrapper>
    )
}
