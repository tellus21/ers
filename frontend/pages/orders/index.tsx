import { AppShellLayout } from '@/feature/components/layout/AppShellLayout'
import { IndexOrders } from '@/feature/orders/IndexOrders'

export default function index() {
    return (
        <AppShellLayout>
            <IndexOrders />
        </AppShellLayout>
    )
}
