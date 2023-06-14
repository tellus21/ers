import { AppShellLayout } from '@/feature/components/layout/AppShellLayout'
import { IndexNursingHomes } from '@/feature/nursing-homes/IndexNursingHomes'

export default function index() {
    return (
        <AppShellLayout>
            <IndexNursingHomes />
        </AppShellLayout>
    )
}
