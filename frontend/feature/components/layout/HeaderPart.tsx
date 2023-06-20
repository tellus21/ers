import { User } from '@/feature/users/UserFeature'
import { Box, Button, Group, Text } from '@mantine/core'
import { useRouter } from 'next/router'

export function HeaderPart() {
    const loginUser: User = JSON.parse(
        sessionStorage.getItem('loginUser') as string
    )
    const router = useRouter()
    const onClickLogout = () => {
        router.push('/')
        sessionStorage.removeItem('loginUser')
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
