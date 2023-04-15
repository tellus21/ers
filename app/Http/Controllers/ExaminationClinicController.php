<?php

namespace App\Http\Controllers;

use App\Http\Requests\ExaminationClinicRequest;
use App\Models\ExaminationClinic;

class ExaminationClinicController extends Controller
{
    public function index()
    {
        return ExaminationClinic::all();
    }

    public function store(ExaminationClinicRequest $request)
    {
        $examinationClinic = ExaminationClinic::create($request->validated());
        return $examinationClinic;
    }

    public function show(ExaminationClinic $examinationClinic)
    {
        return $examinationClinic;
    }

    public function update(ExaminationClinicRequest $request, ExaminationClinic $examinationClinic)
    {
        $examinationClinic->update($request->validated());
        return $examinationClinic;
    }

    public function destroy(ExaminationClinic $examinationClinic)
    {
        $examinationClinic->delete();
        return response()->json(['message' => 'Examination clinic deleted']);
    }
}
