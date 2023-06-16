import { loginUserAtom } from '@/common/contexts'
import { userInitialValues } from '@/feature/users/UserFeature'
import { Box, Button, Group, Text } from '@mantine/core'
import { useAtom } from 'jotai'
import { useRouter } from 'next/router'

export function HeaderPart() {
    const [loginUser, setLoginUser] = useAtom(loginUserAtom)
    const router = useRouter()
    const onClickLogout = () => {
        router.push('/')
        setLoginUser(userInitialValues)
    }

    return (
        <Box p={15}>
            <Group position="right">
                <Text size="md">ログイン名：{loginUser?.login_name}</Text>
                <Text size="md">権限：{loginUser?.authority}</Text>
                <Button onClick={onClickLogout}>ログアウト</Button>
                <Box px={70} />
            </Group>
        </Box>
    )
}
