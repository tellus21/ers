import { useQueryBase } from '@/common/hooks'
import { get } from 'http'
import { useState } from 'react'
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
    return (
        <div>
            <button onClick={() => console.log(homeCareClinics)}>dd</button>
        </div>
    )
}
