<?php

namespace App\Http\Controllers;

use App\Http\Requests\PatientRequest;
use App\Models\Patient;

class PatientController extends Controller
{
    public function index()
    {
        return Patient::with('homeCareClinic', 'homeCareDoctor', 'nursingHome')->get();
    }

    public function store(PatientRequest $request)
    {
        $patient = Patient::create($request->validated());
        return $patient;
    }

    public function show(Patient $patient)
    {
        return $patient;
    }

    public function update(PatientRequest $request, Patient $patient)
    {
        $patient->update($request->validated());
        return $patient;
    }

    public function destroy(Patient $patient)
    {
        $patient->delete();
        return response()->json(['message' => 'Patient deleted']);
    }
}
