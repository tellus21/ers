import { AppShellLayout } from '@/feature/components/layout/AppShellLayout'
import { IndexHomeCareClinics } from '@/feature/home-care-clinics/IndexHomeCareClinics'

export default function index() {
    return (
        <AppShellLayout>
            <IndexHomeCareClinics />
        </AppShellLayout>
    )
}
