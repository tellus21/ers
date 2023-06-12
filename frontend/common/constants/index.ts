export const isNotEmptyErrorMessage = '入力は必須です。'
export const karteNumberLengthErrorMessage =
    'カルテ番号は5桁 or 6桁で入力してください。'

export const genderOptions = ['男', '女', 'その他', '不明']
export const authorityOptions = ['管理者', '検査依頼', '検査予約', '送迎']

export const ProgressStatus = {
    REQUESTING: '依頼中',
    RESERVING: '予約中',
    RESERVATION_CONFIRMED: '予約確定',
    CHECKED: '依頼者チェック済',
    HOLDING: '保留中',
    CANCELLED: '中止',
} as const
