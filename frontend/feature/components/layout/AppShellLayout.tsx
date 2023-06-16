import { useState } from 'react'
import { AppShell, useMantineTheme } from '@mantine/core'

import { NavbarPart } from './NavbarPart'
import { useAtomValue } from 'jotai'
import { loginUserAtom } from '@/common/contexts'
import { HeaderPart } from './HeaderPart'

interface AppShellLayoutProps {
    children: React.ReactNode
}

export function AppShellLayout({ children }: AppShellLayoutProps) {
    const theme = useMantineTheme()
    const loginUser = useAtomValue(loginUserAtom)

    return (
        <AppShell
            styles={{
                main: {
                    background: theme.colors.gray[0],
                },
            }}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            navbar={<NavbarPart />}
            header={<HeaderPart loginName={loginUser.login_name} />}
        >
            {children}
        </AppShell>
    )
}
