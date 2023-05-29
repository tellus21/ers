<?php

use PhpOffice\PhpSpreadsheet\IOFactory;

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
