export interface Field {
    formPath?: string
    component: string
    props?: {
        label?: string
        data?: string | {}[]
        withAsterisk?: boolean
        checkboxProps?: any | undefined
        children?: any
        max?: number
        min?: number
        maxLength?: number
    }
}

interface UseFormInput<T, F> {
    initialValues?: T | undefined
    validate: F
}

export interface UseObject {
    logicalName: string
    physicalName: string
    resource: string
    query: Request[]
    columns?: { accessor: string; title: string; width?: number }[]
    form: UseFormInput<
        Record<string, unknown>,
        (values: Record<string, unknown>) => void
    >
    fields?: any
}
