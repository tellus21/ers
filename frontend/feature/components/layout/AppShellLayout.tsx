import { AppShell, useMantineTheme } from '@mantine/core'
import { NavbarPart } from './NavbarPart'
import { HeaderPart } from './HeaderPart'

interface AppShellLayoutProps {
    children: React.ReactNode
}

export function AppShellLayout({ children }: AppShellLayoutProps) {
    const theme = useMantineTheme()

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
            header={<HeaderPart />}
        >
            {children}
        </AppShell>
    )
}
