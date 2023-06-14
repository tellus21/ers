import { AppShellLayout } from '@/feature/components/layout/AppShellLayout'
import { IndexExaminationClinics } from '@/feature/examination-clinics/IndexExaminationClinics'

export default function index() {
    return (
        <AppShellLayout>
            <IndexExaminationClinics />
        </AppShellLayout>
    )
}
