<?php

namespace App\Http\Controllers;

use App\Http\Requests\AppointmentRequest;
use App\Models\Appointment;

use PhpOffice\PhpSpreadsheet\IOFactory;

define('DOWNLOAD_DIR', 'download/');

function replaceStringInXlsx($filePath, $searchString, $replaceString)
{
    // xlsxファイルを読み込む
    $reader = IOFactory::createReader('Xlsx');
    $spreadsheet = $reader->load($filePath);

    // シート毎に全件検索し、文字列を置換する
    foreach ($spreadsheet->getAllSheets() as $sheet) {
        foreach ($sheet->getRowIterator() as $row) {
            foreach ($row->getCellIterator() as $cell) {
                $cellValue = $cell->getValue();
                if (strpos($cellValue, $searchString) !== false) {
                    $cell->setValue(str_replace($searchString, $replaceString, $cellValue));
                }
            }
        }
    }

    // 編集内容を保存する
    $writer = IOFactory::createWriter($spreadsheet, 'Xlsx');
    $writer->save(DOWNLOAD_DIR . "aFAX.xlsx");
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
        $appointment = Appointment::find($id);

        // 置換する文字列を配列で保存
        $keyValueArray = [
            '{nursing_home.name}' => 'replaced_string1',
            '{fax_sender}' => 'replaced_string2',
        ];

        // xlsxファイルのパスを取得
        $filePath = public_path('download/FAX.xlsx');

        replaceStringInXlsx($filePath, '$nursing_home.name', $appointment->id);

        return response()->download(public_path(DOWNLOAD_DIR . "aFAX.xlsx"));
    }
}
