<?php

namespace App\Http\Controllers;

use App\Http\Requests\InsuranceRequest;
use App\Models\Insurance;

class InsuranceController extends Controller
{
    public function index()
    {
        return Insurance::all();
    }

    public function store(InsuranceRequest $request)
    {
        $insurance = Insurance::create($request->validated());
        return $insurance;
    }

    public function show(Insurance $insurance)
    {
        return $insurance;
    }

    public function update(InsuranceRequest $request, Insurance $insurance)
    {
        $insurance->update($request->validated());
        return $insurance;
    }

    public function destroy(Insurance $insurance)
    {
        $insurance->delete();
        return response()->json(['message' => 'Insurance deleted']);
    }
}
