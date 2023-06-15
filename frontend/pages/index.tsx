import {
    TextInput,
    PasswordInput,
    Paper,
    Title,
    Text,
    Container,
    Button,
    Space,
    Group,
} from '@mantine/core'
import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { User } from '@/feature/users/UserFeature'
import { loginUserAtom } from '@/common/contexts'
import { useSetAtom } from 'jotai'
import { notifications } from '@mantine/notifications'

export default function AuthenticationTitle() {
    const [loginName, setLoginName] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const setLoginUser = useSetAtom(loginUserAtom)

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
                    notifications.show({
                        title: 'ログイン成功😄',
                        message: '画面が切り替わるまでお待ちください！',
                    })
                    setLoginUser(user)
                    router.push('/orders')
                } else {
                    notifications.show({
                        title: 'ログイン失敗😥',
                        message: 'ログイン名またはパスワードが違います。',
                        color: 'red',
                    })
                    setErrorMessage('ログイン名またはパスワードが違います。')
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
                ログイン名が不明な場合は施設の管理者にご確認ください。
            </Text>

            {errorMessage && (
                <Group position="center">
                    <Text color="red">{errorMessage}</Text>
                </Group>
            )}

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
