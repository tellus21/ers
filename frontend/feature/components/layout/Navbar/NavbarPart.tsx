import { useState } from 'react'
import {
    createStyles,
    Navbar,
    Group,
    Code,
    rem,
    getStylesRef,
} from '@mantine/core'

import {
    IconBellRinging,
    IconReceipt,
    IconFingerprint,
    IconFaceId,
    IconKey,
    IconSettings,
    IconDatabaseImport,
    IconSwitchHorizontal,
    IconLogout,
    IconExclamationMark,
    IconBook,
    IconNotes,
    IconSelect,
    IconHeart,
    IconHomeHeart,
    IconHeartHandshake,
    IconBuildingHospital,
    IconHome2,
    IconStethoscope,
    IconBuildingArch,
    IconFileAlert,
    IconHeartRateMonitor,
    IconOld,
} from '@tabler/icons-react'
import Link from 'next/link'

const useStyles = createStyles((theme) => ({
    navbar: {
        backgroundColor: theme.fn.variant({
            variant: 'filled',
            color: theme.primaryColor,
        }).background,
    },

    version: {
        backgroundColor: theme.fn.lighten(
            theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
                .background!,
            0.1
        ),
        color: theme.white,
        fontWeight: 700,
    },

    header: {
        paddingBottom: theme.spacing.md,
        marginBottom: `calc(${theme.spacing.md} * 1.5)`,
        borderBottom: `${rem(1)} solid ${theme.fn.lighten(
            theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
                .background!,
            0.1
        )}`,
    },

    footer: {
        paddingTop: theme.spacing.md,
        marginTop: theme.spacing.md,
        borderTop: `${rem(1)} solid ${theme.fn.lighten(
            theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
                .background!,
            0.1
        )}`,
    },

    link: {
        ...theme.fn.focusStyles(),
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        fontSize: theme.fontSizes.sm,
        color: theme.white,
        padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
        borderRadius: theme.radius.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.fn.lighten(
                theme.fn.variant({
                    variant: 'filled',
                    color: theme.primaryColor,
                }).background!,
                0.1
            ),
        },
    },

    linkIcon: {
        ref: getStylesRef('icon'),
        color: theme.white,
        opacity: 0.75,
        marginRight: theme.spacing.sm,
    },

    linkActive: {
        '&, &:hover': {
            backgroundColor: theme.fn.lighten(
                theme.fn.variant({
                    variant: 'filled',
                    color: theme.primaryColor,
                }).background!,
                0.15
            ),
            [`& .${getStylesRef('icon')}`]: {
                opacity: 0.9,
            },
        },
    },
}))

const data = [
    { link: '/orders', label: '検査', icon: IconHeartRateMonitor },
    { link: '/patients', label: '患者', icon: IconOld },
    { link: '/nursing-homes', label: '入居施設', icon: IconBuildingArch },
    { link: '/home-care-doctors', label: '在宅医師', icon: IconStethoscope },
    {
        link: '/home-care-clinics',
        label: '在宅クリニック',
        icon: IconHomeHeart,
    },
    {
        link: '/examination-clinics',
        label: '検査クリニック',
        icon: IconBuildingHospital,
    },
    { link: '/users', label: 'ユーザ', icon: IconFaceId },
    { link: '/important-points', label: '注意事項', icon: IconFileAlert },
    // { link: '', label: '個人設定', icon: IconSettings },
    { link: '', label: '操作マニュアル', icon: IconBook },
    { link: '', label: '操作お試しページ', icon: IconNotes },
]

export function NavbarPart() {
    const { classes, cx } = useStyles()
    const [active, setActive] = useState('Billing')

    const links = data.map((item) => (
        <Link
            className={cx(classes.link, {
                [classes.linkActive]: item.label === active,
            })}
            href={item.link}
            key={item.label}
            // ↓コメントアウトすると、選択はできるけど、リンクとばなくなる
            // onClick={(event) => {
            //     event.preventDefault()
            //     setActive(item.label)
            // }}
        >
            <Group>
                <item.icon className={classes.linkIcon} />
                {item.label}
            </Group>
        </Link>
    ))

    return (
        <Navbar width={{ sm: 230 }} p="md" className={classes.navbar}>
            <Navbar.Section grow>
                <Group className={classes.header} position="apart">
                    {/* <MantineLogo size={28} inverted /> */}
                    <Code className={classes.version}>v0.0.4</Code>
                </Group>
                {links}
            </Navbar.Section>

            <Navbar.Section className={classes.footer}>
                <a
                    href="#"
                    className={classes.link}
                    onClick={(event) => event.preventDefault()}
                >
                    <IconSwitchHorizontal
                        className={classes.linkIcon}
                        stroke={1.5}
                    />
                    <span>Change account</span>
                </a>

                <a
                    href="#"
                    className={classes.link}
                    onClick={(event) => event.preventDefault()}
                >
                    <IconLogout className={classes.linkIcon} stroke={1.5} />
                    <span>Logout</span>
                </a>
            </Navbar.Section>
        </Navbar>
    )
}
