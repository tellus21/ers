import { usePatientFeature } from '../patients/patientFeature'

const getNames = (obj: any) => obj?.map(({ name }: { name: string }) => name)

export default function index() {
    const { query: patients, patientNames } = usePatientFeature()

    return (
        <div>
            <button onClick={() => console.log(patientNames)}>dd</button>
        </div>
    )
}
