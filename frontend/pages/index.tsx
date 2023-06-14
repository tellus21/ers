import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
    Space,
} from '@mantine/core'

export default function AuthenticationTitle() {
    return (
        <Container size={420} my={160}>
            <Title
                align="center"
                sx={() => ({
                    fontWeight: 900,
                })}
            >
                検査システム
            </Title>
            <Text color="dimmed" size="sm" align="center" mt={5}>
                ログイン名とパスワードを入力してください。
            </Text>

            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <TextInput
                    label="ログイン名"
                    placeholder="m-yoshida"
                    required
                    mt="md"
                    size="sm"
                />
                <PasswordInput
                    label="パスワード"
                    placeholder="m-yoshidaxxxx"
                    required
                    mt="md"
                />
                <Space h="lg" />
                <Button fullWidth mt="xl" size="sm">
                    Login
                </Button>
            </Paper>
        </Container>
    )
}
