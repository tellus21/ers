export const API_URL = process.env.NEXT_PUBLIC_API_URL
export const isNotEmptyErrorMessage = '入力は必須です。'
export const karteNumberLengthErrorMessage =
    'カルテ番号は5桁 or 6桁で入力してください。'

export const genderOptions = ['男', '女', 'その他', '不明']
export const authorityOptions = ['管理者', '検査依頼', '検査予約', '送迎']

export enum ProgressStatus {
    REQUESTING = '依頼中',
    RESERVING = '予約中',
    RESERVATION_CONFIRMED = '予約確定',
    CHECKED = '依頼者チェック済',
    HOLDING = '保留',
    CANCELLED = '中止',
}

export enum Authority {
    ADMIN = '管理者',
    REQUEST = '検査依頼',
    RESERVE = '検査予約',
    TRANSPORT = '送迎',
}
