import { AppShellLayout } from '@/feature/components/layout/AppShellLayout'
import { IndexPatients } from '@/feature/patients/IndexPatients'

export default function index() {
    return (
        <AppShellLayout>
            <IndexPatients />
        </AppShellLayout>
    )
}
