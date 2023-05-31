<?php

use PhpOffice\PhpSpreadsheet\IOFactory;

/**
 * XLSXファイル内の文字列を置換する関数
 * 
 * @param string $filePath 置換対象のXLSXファイルパス
 * @param array $keyValueArray 置換するキーと値の配列
 * @param string $savePath 編集後のXLSXファイルを保存するパス
 */
function replaceStringInXlsx(string $filePath, array $keyValueArray, string $savePath = null)
{
    // xlsxファイルを読み込む
    $reader = IOFactory::createReader('Xlsx');
    $spreadsheet = $reader->load($filePath);

    // シート毎に全件検索し、文字列を置換する
    foreach ($spreadsheet->getAllSheets() as $sheet) {
        foreach ($sheet->getRowIterator() as $row) {
            foreach ($row->getCellIterator() as $cell) {
                $cellValue = $cell->getValue();

                // keyvalue型のオブジェクトの配列を取得する
                foreach ($keyValueArray as $key => $value) {
                    if (strpos($cellValue, $key) !== false) {
                        $cell->setValue(str_replace($key, $value, $cellValue));
                    }
                }
            }
        }
    }

    // 編集内容を保存する
    $writer = IOFactory::createWriter($spreadsheet, 'Xlsx');
    $writer->save($savePath);
}

/**
 * 曜日を日本語表記に変換する関数
 * 
 * @param string $weekday 英語表記の曜日
 * @return string 日本語表記の曜日
 */
function convertDay($weekday)
{
    $days = array('Mon' => '月', 'Tue' => '火', 'Wed' => '水', 'Thu' => '木', 'Fri' => '金', 'Sat' => '土', 'Sun' => '日');
    return $days[$weekday];
}

/**
 * ISO8601形式の日付をyyyy年mm月dd日(曜日)の形式に変換する関数
 * 
 * @param string $iso8601 ISO8601形式の日付
 * @return string yyyy年mm月dd日(曜日)の形式の日付
 */
function convertISO8601ToDate($iso8601)
{
    // ISO8601形式の文字列を日付に変換
    $date = new DateTime($iso8601);
    // 日付をyyyy年mm月dd日(曜日)の形式に変換
    $weekday = $date->format('D');
    return $date->format('Y年m月d日（') . convertDay($weekday) . '）';
}

/**
 * 文字列の2文字目を隠す関数
 * 
 * @param string $str 隠す対象の文字列
 * @return string 2文字目が隠された文字列
 */
function hideSecondCharacter($str)
{
    $length = mb_strlen($str);
    if ($length == 1) {
        return '●';
    } else {
        return mb_substr($str, 0, 1) . '●' . mb_substr($str, 2);
    }
}
