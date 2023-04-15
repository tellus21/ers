<?php

namespace App\Http\Controllers;

use App\Http\Requests\ConditionRequest;
use App\Models\Condition;

class ConditionController extends Controller
{
    public function index()
    {
        return Condition::all();
    }

    public function store(ConditionRequest $request)
    {
        $condition = Condition::create($request->validated());
        return $condition;
    }

    public function show(Condition $condition)
    {
        return $condition;
    }

    public function update(ConditionRequest $request, Condition $condition)
    {
        $condition->update($request->validated());
        return $condition;
    }

    public function destroy(Condition $condition)
    {
        $condition->delete();
        return response()->json(['message' => 'Condition deleted']);
    }
}
