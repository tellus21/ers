<?php

namespace App\Http\Controllers;

use App\Http\Requests\HomeCareClinicNursingHomeRequest;
use App\Models\HomeCareClinicNursingHome;

class HomeCareClinicNursingHomeController extends Controller
{
    public function index()
    {
        return HomeCareClinicNursingHome::all();
    }

    public function store(HomeCareClinicNursingHomeRequest $request)
    {
        $homeCareClinicNursingHome = HomeCareClinicNursingHome::create($request->validated());
        return $homeCareClinicNursingHome;
    }

    public function show(HomeCareClinicNursingHome $homeCareClinicNursingHome)
    {
        return $homeCareClinicNursingHome;
    }

    public function update(HomeCareClinicNursingHomeRequest $request, HomeCareClinicNursingHome $homeCareClinicNursingHome)
    {
        $homeCareClinicNursingHome->update($request->validated());
        return $homeCareClinicNursingHome;
    }

    public function destroy(HomeCareClinicNursingHome $homeCareClinicNursingHome)
    {
        $homeCareClinicNursingHome->delete();
        return response()->json(['message' => 'HomeCareClinicNursingHome deleted']);
    }
}
