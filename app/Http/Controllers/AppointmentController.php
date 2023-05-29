<?php

namespace App\Http\Controllers;

use App\Http\Requests\AppointmentRequest;
use App\Models\Appointment;

use PhpOffice\PhpSpreadsheet\IOFactory;

// ファイルダウンロード関連
// define('DOWNLOAD_DIR', 'download/');

/**
 * xlsxファイルの文字列を置換する
 *
 * @param string $filePath
 * @param array $keyValueArray
 * @param string $savaPath
 * @return void
 */
function replaceStringInXlsx(string $filePath, array $keyValueArray, string $savaPath)
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
    $writer->save($savaPath);
}

class AppointmentController extends Controller
{
    public function index()
    {
        return Appointment::all();
    }

    public function store(AppointmentRequest $request)
    {
        $appointment = Appointment::create($request->validated());
        return $appointment;
    }

    public function show(Appointment $appointment)
    {
        return $appointment;
    }

    public function update(AppointmentRequest $request, Appointment $appointment)
    {
        $appointment->update($request->validated());
        return $appointment;
    }

    public function destroy(Appointment $appointment)
    {
        $appointment->delete();
        return response()->json(['message' => 'Appointment deleted']);
    }

    public function download_fax($id)
    {
        // 指定されたIDのデータを取得
        $appointment = Appointment::find($id);

        // xlsxファイルのパスを取得
        $filePath = public_path(config('constants.DOWNLOAD_DIR') . "FAX.xlsx");

        // 置換する文字列を配列で保存
        $keyValueArray = [
            '$nursing_home.name' => $appointment->id,
            '$fax_sender' => $appointment->welcoming_time,
        ];

        // ダウンロードするファイルの名前を指定
        $fileName = 'FAX.xlsx';

        // xlsxファイルの文字列を置換する
        replaceStringInXlsx($filePath, $keyValueArray, config('constants.DOWNLOAD_DIR') . $fileName);

        // ファイルをダウンロードする
        return response()->download(public_path(config('constants.DOWNLOAD_DIR') . $fileName));
    }
}
