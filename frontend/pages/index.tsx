import {
    TextInput,
    PasswordInput,
    Paper,
    Title,
    Text,
    Container,
    Button,
    Space,
} from '@mantine/core'
import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { User } from '@/feature/users/UserFeature'

export default function AuthenticationTitle() {
    const [loginName, setLoginName] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const router = useRouter()

    const handleSubmit = () => {
        axios
            .get('http://localhost:8000/api/users')
            .then((res) => {
                const user = res.data.find(
                    (user: User) =>
                        user.login_name === loginName &&
                        user.password === password
                )
                if (user) {
                    console.log('OK')
                    router.push('/orders')
                } else {
                    console.log('NG')
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSubmit()
        }
    }

    return (
        <Container size={420} my={160}>
            <Title align="center" fw={700}>
                検査依頼システム
            </Title>
            <Text color="dimmed" size="sm" align="center" mt={5}>
                パスワードが分からない場合は管理者にご確認ください。
            </Text>
            {errorMessage && <Text color="danger">{errorMessage}</Text>}
            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <TextInput
                    label="ログイン名"
                    placeholder="m-yoshida"
                    required
                    mt="md"
                    size="sm"
                    value={loginName}
                    onChange={(e) => setLoginName(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <PasswordInput
                    label="パスワード"
                    placeholder="m-yoshidaxxxx"
                    required
                    mt="md"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <Space h="lg" />
                <Button fullWidth mt="xl" size="md" onClick={handleSubmit}>
                    Login
                </Button>
            </Paper>
        </Container>
    )
}
