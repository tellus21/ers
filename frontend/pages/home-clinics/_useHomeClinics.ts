import { useQueryBase } from '@/common/hooks'

const resource = 'home_clinics'
export const useHomeClinics = () => {
    const {
        isLoading: homeClinicsIsLoading,
        error: homeClinicsError,
        data: homeClinicsQuery,
    } = useQueryBase(resource)

    return { homeClinicsIsLoading, homeClinicsError, homeClinicsQuery }
}
