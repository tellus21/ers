import { IndexPageTemplate } from '@/common/components/page/IndexPageTemplate'
import { useHomeClinics } from '../home-clinics/_useHomeClinics'
import {
    HomeClinicDoctor,
    homeClinicDoctorColumns,
    HomeClinicDoctorFormValues,
    homeClinicDoctorInitialValues,
    homeClinicDoctorValidate,
    useHomeClinicDoctorFields,
    useHomeClinicDoctorTransFormValues,
} from './useHomeClinicDoctor'

const IndexObject = {
    feature: 'home_clinic_doctors',
    logicalName: '在宅医師',
    formInitialValues: homeClinicDoctorInitialValues,
    formValidate: homeClinicDoctorValidate,
    // formFields: homeClinicDoctorFields,
    tableColumns: homeClinicDoctorColumns,
}

export default function Index() {
    const fields = useHomeClinicDoctorFields()

    // ↓useHomeClinicsTransformにしたいとりあえず方向性決めてから
    const { homeClinicsQuery } = useHomeClinics()
    const findHomeClinicId = (homeClinicsName: string) =>
        homeClinicsQuery?.home_clinics.find(
            ({ name: any }) => name === homeClinicsName
        ).id

    const transFormValues = (values: any): HomeClinicDoctorFormValues => {
        const homeClinicId = String(findHomeClinicId(values.home_clinic_name))
        return { home_clinic_id: homeClinicId, name: values.name }
    }

    return (
        <IndexPageTemplate
            {...IndexObject}
            formFields={fields}
            formTransFormValues={transFormValues}
        />
    )
}
