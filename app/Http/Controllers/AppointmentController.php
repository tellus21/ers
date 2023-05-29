<?php

namespace App\Http\Controllers;

use App\Helpers\MyHelper;
use App\Http\Requests\AppointmentRequest;
use App\Models\Appointment;

use PhpOffice\PhpSpreadsheet\IOFactory;

define('DOWNLOAD_DIR', 'download/');

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
            '$nursing_home.name' => $appointment->id,
            '$fax_sender' => $appointment->welcoming_time,
        ];

        // テンプレートのファイルパスを指定
        $templatePath = public_path(DOWNLOAD_DIR . 'FAX.xlsx');

        // 保存先のファイルパスを指定
        $savePath = public_path(DOWNLOAD_DIR . 'FAX_' . $appointment->id . '.xlsx');

        // ファイルを置換して保存
        replaceStringInXlsx($templatePath, $keyValueArray, $savePath);

        return response()->download($savePath);
    }
}
