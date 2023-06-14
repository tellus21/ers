import { AppShellLayout } from '@/feature/components/layout/AppShellLayout'
import { IndexUsers } from '@/feature/users/IndexUsers'

export default function index() {
    return (
        <AppShellLayout>
            <IndexUsers />
        </AppShellLayout>
    )
}
