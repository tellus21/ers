import { useQueryBase } from '@/common/hooks'

const feature = 'home_clinics'
export const useHomeClinics = () => {
    const {
        isLoading: homeClinicsIsLoading,
        error: homeClinicsError,
        data: homeClinicsQuery,
    } = useQueryBase(feature)

    return { homeClinicsIsLoading, homeClinicsError, homeClinicsQuery }
}
