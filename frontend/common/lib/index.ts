// 6桁の文字数でない場合、エラー文字列を返す関数
const checkKarteNumberLength = (value: string): string => {
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
