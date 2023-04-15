<?php

namespace App\Http\Controllers;

use App\Http\Requests\ExaminationClinicPatientRequest;
use App\Models\ExaminationClinicPatient;

class ExaminationClinicPatientController extends Controller
{
    public function index()
    {
        return ExaminationClinicPatient::all();
    }

    public function store(ExaminationClinicPatientRequest $request)
    {
        $examinationClinicPatient = ExaminationClinicPatient::create($request->validated());
        return $examinationClinicPatient;
    }

    public function show(ExaminationClinicPatient $examinationClinicPatient)
    {
        return $examinationClinicPatient;
    }

    public function update(ExaminationClinicPatientRequest $request, ExaminationClinicPatient $examinationClinicPatient)
    {
        $examinationClinicPatient->update($request->validated());
        return $examinationClinicPatient;
    }

    public function destroy(ExaminationClinicPatient $examinationClinicPatient)
    {
        $examinationClinicPatient->delete();
        return response()->json(['message' => 'ExaminationClinicPatient deleted']);
    }
}
