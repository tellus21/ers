import { useQueryBase } from '@/common/hooks'
import { findIdByName } from '@/common/lib'

const getNames = (obj: any) => obj?.map(({ name }: { name: string }) => name)

export default function index() {
    // const [homeCareClinics, setHomeCareClinics] = useState([])
    // useQueryBase((homeCareClinics) => {
    //     setHomeCareClinics(homeCareClinics)
    // })

    const { data: homeCareClinics } = useQueryBase('home_care_clinics')
    // const homeCareClinicNames: [] = homeCareClinics?.map(
    //     ({ name }: { name: string }) => name
    // )
    const homeCareClinicNames = getNames(homeCareClinics)
    const home_care_clinic_id = findIdByName(homeCareClinics, '北海道')

    return (
        <div>
            <button onClick={() => console.log(homeCareClinics)}>dd</button>
        </div>
    )
}
