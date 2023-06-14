import { AppShellLayout } from '@/feature/components/layout/AppShellLayout'
import { IndexHomeCareDoctors } from '@/feature/home-care-doctors/IndexHomeCareDoctors'

export default function index() {
    return (
        <AppShellLayout>
            <IndexHomeCareDoctors />
        </AppShellLayout>
    )
}
