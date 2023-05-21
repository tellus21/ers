import '@/styles/globals.css'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { MantineProvider } from '@mantine/core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import 'dayjs/locale/ja'

import { emsTheme } from '@/common/theme'
import { Notifications } from '@mantine/notifications'
import { Provider } from 'jotai'
import { AppShellLayout } from '@/feature/components/layout/AppShellLayout'

export default function App(props: AppProps) {
    const queryClient = new QueryClient()
    const { Component, pageProps } = props

    return (
        <>
            <Head>
                <title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>

            <MantineProvider theme={emsTheme} withGlobalStyles withNormalizeCSS>
                <Provider>
                    <Notifications />
                    <QueryClientProvider client={queryClient}>
                        <AppShellLayout>
                            <Component {...pageProps} />
                        </AppShellLayout>
                        <ReactQueryDevtools initialIsOpen={false} />
                    </QueryClientProvider>
                </Provider>
            </MantineProvider>
        </>
    )
}
