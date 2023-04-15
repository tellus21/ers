<?php

namespace App\Http\Controllers;

use App\Http\Requests\NursingHomeRequest;
use App\Models\NursingHome;

class NursingHomeController extends Controller
{
    public function index()
    {
        return NursingHome::all();
    }

    public function store(NursingHomeRequest $request)
    {
        $nursingHome = NursingHome::create($request->validated());
        return $nursingHome;
    }

    public function show(NursingHome $nursingHome)
    {
        return $nursingHome;
    }

    public function update(NursingHomeRequest $request, NursingHome $nursingHome)
    {
        $nursingHome->update($request->validated());
        return $nursingHome;
    }

    public function destroy(NursingHome $nursingHome)
    {
        $nursingHome->delete();
        return response()->json(['message' => 'Nursing home deleted']);
    }
}
