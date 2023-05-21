import {
    Burger,
    Header,
    MantineTheme,
    MediaQuery,
    Text,
    useMantineTheme,
} from '@mantine/core'

interface HeaderPartProps {
    isOpened: boolean
    setOpened: () => void
}

export function HeaderPart({ isOpened, setOpened }: HeaderPartProps) {
    const theme = useMantineTheme()
    return (
        <Header height={{ base: 50, md: 60 }} p="md">
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    height: '100%',
                }}
            >
                <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                    <Burger
                        opened={isOpened}
                        onClick={setOpened}
                        size="sm"
                        color={theme.colors.gray[6]}
                        mr="xl"
                    />
                </MediaQuery>

                <Text>header</Text>
            </div>
        </Header>
    )
}
