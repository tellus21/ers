import { isNotEmptyErrorMessage } from '@/common/constants'
import { useQueryBase } from '@/common/hooks/NormalMutate'
import { Field } from '@/common/types'
import { isNotEmpty, useForm } from '@mantine/form'

// ---【Type】---
export interface MedicalQuestionnaire {
    id: number
    patient_id: number
    movement: string
    movement_comment: string
    standing: string
    sitting: string
    transfer: string
    elimination: string
    underwear: string
    elimination_comment: string
    is_paralysis: boolean
    paralysis_comment: boolean
    vision: string
    physical_condition_comment: string
    hearing: string
    hearing_aid: string
    vision_left_right: string
    hearing_left_right: string
    hearing_aid_left_right: string
    has_dentures: boolean
    has_ersemeer: boolean
    communication: string
    language_understanding: string
    wandering: string
    violence: string
    resistance: string
    obscenity: string
    communication_comment: string
    other_comment: string
    height: number
    weight: number
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
}

// ---【FormValues】---
export interface MedicalQuestionnaireFormValues extends MedicalQuestionnaire {}

// ---【InitialValues】---
export const medicalQuestionnaireValues: MedicalQuestionnaireFormValues = {
    id: 0,
    patient_id: 0,
    movement: '',
    movement_comment: '',
    standing: '',
    sitting: '',
    transfer: '',
    elimination: '',
    underwear: '',
    elimination_comment: '',
    is_paralysis: false,
    paralysis_comment: false,
    vision: '',
    physical_condition_comment: '',
    hearing: '',
    hearing_aid: '',
    vision_left_right: '',
    hearing_left_right: '',
    hearing_aid_left_right: '',
    has_dentures: false,
    has_ersemeer: false,
    communication: '',
    language_understanding: '',
    wandering: '',
    violence: '',
    resistance: '',
    obscenity: '',
    communication_comment: '',
    other_comment: '',
    height: 0.0,
    weight: 0.0,
    created_at: new Date(),
    updated_at: new Date(),
    deleted_at: null,
}

// ---【Feature】---
export function useMedicalQuestionnaireFeature() {
    // ---【Name】---
    const logicalName = '問診票'
    const resource = 'medical_questionnaires'

    // ---【Validate】---
    const validate = {
        movement: isNotEmpty(isNotEmptyErrorMessage),
        standing: isNotEmpty(isNotEmptyErrorMessage),
        sitting: isNotEmpty(isNotEmptyErrorMessage),
        transfer: isNotEmpty(isNotEmptyErrorMessage),
        elimination: isNotEmpty(isNotEmptyErrorMessage),
        is_paralysis: isNotEmpty(isNotEmptyErrorMessage),
        paralysis_comment: isNotEmpty(isNotEmptyErrorMessage),
        vision: isNotEmpty(isNotEmptyErrorMessage),
        hearing: isNotEmpty(isNotEmptyErrorMessage),
        hearing_aid: isNotEmpty(isNotEmptyErrorMessage),
        vision_left_right: isNotEmpty(isNotEmptyErrorMessage),
        hearing_left_right: isNotEmpty(isNotEmptyErrorMessage),
        communication: isNotEmpty(isNotEmptyErrorMessage),
        language_understanding: isNotEmpty(isNotEmptyErrorMessage),
        wandering: isNotEmpty(isNotEmptyErrorMessage),
        violence: isNotEmpty(isNotEmptyErrorMessage),
        resistance: isNotEmpty(isNotEmptyErrorMessage),
        obscenity: isNotEmpty(isNotEmptyErrorMessage),
        height: isNotEmpty(isNotEmptyErrorMessage),
        weight: isNotEmpty(isNotEmptyErrorMessage),
    }

    // ---【Form】---
    const form = useForm<MedicalQuestionnaireFormValues>({
        initialValues: medicalQuestionnaireValues,
        validate: validate,
    })

    // ---【Fields】---
    const fields: Field[] = [
        {
            formPath: 'movement',
            component: 'TextInput',
            props: {
                label: '移動',
                withAsterisk: true,
            },
        },
        {
            formPath: 'movement_comment',
            component: 'TextInput',
            props: {
                label: '移動コメント',
            },
        },
        {
            formPath: 'standing',
            component: 'TextInput',
            props: {
                label: '立位',
            },
        },
    ]

    // ---【API】---
    const { data: query } = useQueryBase(resource)

    return {
        logicalName,
        resource,
        form,
        query,
        fields,
    }
}
