<?php

namespace App\Http\Controllers;

use App\Http\Requests\HomeCareDoctorRequest;
use App\Models\HomeCareDoctor;

class HomeCareDoctorController extends Controller
{
    public function index()
    {
        return HomeCareDoctor::all();
    }

    public function store(HomeCareDoctorRequest $request)
    {
        $homeCareDoctor = HomeCareDoctor::create($request->validated());
        return $homeCareDoctor;
    }

    public function show(HomeCareDoctor $homeCareDoctor)
    {
        return $homeCareDoctor;
    }

    public function update(HomeCareDoctorRequest $request, HomeCareDoctor $homeCareDoctor)
    {
        $homeCareDoctor->update($request->validated());
        return $homeCareDoctor;
    }

    public function destroy(HomeCareDoctor $homeCareDoctor)
    {
        $homeCareDoctor->delete();
        return response()->json(['message' => 'Home care doctor deleted']);
    }
}
