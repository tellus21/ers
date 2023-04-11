export interface Field {
    formPath?: string
    component: string
    props?: {
        label?: string
        data?: string[]
        withAsterisk?: boolean
        children?: { label: string; value: string }[]
    }
}
