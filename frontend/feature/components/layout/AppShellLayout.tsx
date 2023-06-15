import { useState } from 'react'
import { AppShell, useMantineTheme, Box } from '@mantine/core'

import { NavbarPart } from './Navbar/NavbarPart'
import { useAtomValue } from 'jotai'
import { loginUserAtom } from '@/common/contexts'

interface AppShellLayoutProps {
    children: React.ReactNode
}

export function AppShellLayout({ children }: AppShellLayoutProps) {
    const theme = useMantineTheme()
    const loginUser = useAtomValue(loginUserAtom)
    const [isOpened, setOpened] = useState(false)

    const onClickBurger = () => setOpened((o) => !o)

    return (
        <AppShell
            styles={{
                main: {
                    // background: theme.colors.white,
                    background: theme.colors.gray[0],
                },
            }}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            navbar={<NavbarPart />}
            // header={
            //     <HeaderPart isOpened={isOpened} setOpened={onClickBurger} />
            // }
            header={<Box p={30} />}
        >
            {/* <Text>main</Text> */}
            {`ログイン名：${loginUser.login_name}`}
            {children}
        </AppShell>
    )
}
