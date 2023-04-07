import '@/styles/globals.css'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { MantineProvider } from '@mantine/core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import 'dayjs/locale/ja'
import axios from 'axios'

import { AppShellLayout } from '@/common/components/layout/AppShellLayout'
import { emsTheme } from '@/common/theme'

export default function App(props: AppProps) {
    const queryClient = new QueryClient()
    const { Component, pageProps } = props
    // axios.defaults.withCredentials = true

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
                <QueryClientProvider client={queryClient}>
                    <AppShellLayout>
                        <Component {...pageProps} />
                    </AppShellLayout>
                    <ReactQueryDevtools initialIsOpen={false} />
                </QueryClientProvider>
            </MantineProvider>
        </>
    )
}
