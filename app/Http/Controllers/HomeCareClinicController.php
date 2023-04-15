<?php

namespace App\Http\Controllers;

use App\Http\Requests\HomeCareClinicRequest;
use App\Models\HomeCareClinic;

class HomeCareClinicController extends Controller
{
    public function index()
    {
        return HomeCareClinic::all();
    }

    public function store(HomeCareClinicRequest $request)
    {
        $homeCareClinic = HomeCareClinic::create($request->validated());
        return $homeCareClinic;
    }

    public function show(HomeCareClinic $homeCareClinic)
    {
        return $homeCareClinic;
    }

    public function update(HomeCareClinicRequest $request, HomeCareClinic $homeCareClinic)
    {
        $homeCareClinic->update($request->validated());
        return $homeCareClinic;
    }

    public function destroy(HomeCareClinic $homeCareClinic)
    {
        $homeCareClinic->delete();
        return response()->json(['message' => 'Home care clinic deleted']);
    }
}
