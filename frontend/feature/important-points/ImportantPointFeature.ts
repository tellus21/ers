import { isNotEmptyErrorMessage } from '@/common/constants'
import { useQueryBase } from '@/common/hooks/NormalMutate'
import { getNames } from '@/common/lib'
import { Field } from '@/common/types'
import { isNotEmpty, useForm } from '@mantine/form'

// ---【Types】---
export interface ImportPoint {
    id: number
    important_point: string
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
}

// ---【FormValues】---
export interface ImportPointFormValues extends ImportPoint {}

// ---【InitialValues】---
export const importantPointInitialValues: ImportPointFormValues = {
    id: 0,
    important_point: '',
    created_at: new Date(),
    updated_at: new Date(),
    deleted_at: null,
}

// ---【Feature】---
export function useImportPointFeature() {
    // ---【Name】---
    const logicalName = '特記事項'
    const resource = 'important_points'

    // ---【Validate】---
    const validate = {
        important_point: isNotEmpty(isNotEmptyErrorMessage),
    }

    // ---【Form】---
    const form = useForm<ImportPointFormValues>({
        initialValues: importantPointInitialValues,
        validate: validate,
    })

    // ---【DataTable】---
    const columns = [
        {
            accessor: 'id',
            title: 'id',
            width: 50,
            textAlignment: 'center',
            sortable: true,
        },
        {
            accessor: 'important_point',
            title: '特記事項',
            textaligment: 'center',
            sortable: true,
        },
    ]

    // ---【Fields】---
    const fields: Field[] = [
        {
            formPath: 'important_point',
            component: 'Textarea',
            props: {
                label: '特記事項',
                withAsterisk: true,
            },
        },
    ]

    // ---【API】---
    const { data: query } = useQueryBase(resource)
    const importantPointNames = getNames(query)

    // ---【Return】 ---
    return {
        logicalName,
        resource,
        columns,
        form,
        fields,
        query,
        importantPointNames,
    }
}
