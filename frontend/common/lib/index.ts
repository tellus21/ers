/**
 * 文字列を受け取り、カルテ番号として正しい文字数かをチェックする関数
 * 5桁の場合は先頭に0を付与して6桁にする
 * 6桁でない場合はエラーメッセージを返す
 * @param value 文字列
 * @returns 6桁の文字列またはエラーメッセージ
 */
export const checkKarteNumberLength = (value: string): string => {
    // 5桁の場合は先頭に0を付与して6桁にする
    if (value.length === 5) {
        return `0${value}`
    }
    // 6桁でない場合はエラーメッセージを返す
    else if (value.length !== 6) {
        return '6桁の文字数でないため、エラーが発生しました。'
    }
    // 6桁の場合はそのまま返す
    return value
}

/**
 * objを受け取り、nameプロパティを持つオブジェクトの配列として返す関数
 * @param obj 任意の型のオブジェクト
 * @returns nameプロパティを持つオブジェクトの配列
 */
export const getNames = (
    obj: { name: string }[] | undefined
): string[] | undefined => obj?.map(({ name }) => name)

/**
 * 名前からIDを検索する関数
 * @param obj 検索対象のオブジェクト
 * @param value 検索する名前
 * @returns 検索したID
 */
export const findIdByName = (
    obj: { name: string; id: string }[],
    value: string
) => obj?.find((item) => item.name === value)?.id

/**
 * 日付プロパティを変換する関数
 * @param obj 変換対象のオブジェクト
 * @param key 変換対象のプロパティ名
 * @returns 変換後のオブジェクト
 */
export const convertDateProperty = (
    obj: { [key: string]: any },
    key: string
) => {
    const newObj = { ...obj }
    if (newObj.hasOwnProperty(key)) {
        newObj[key] = new Date(newObj[key])
    }
    return newObj
}
