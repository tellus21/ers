<?php

namespace App\Http\Controllers;

use App\Http\Requests\DepartmentRequest;
use App\Models\Department;

class DepartmentController extends Controller
{
    public function index()
    {
        return Department::all();
    }

    public function store(DepartmentRequest $request)
    {
        $department = Department::create($request->validated());
        return $department;
    }

    public function show(Department $department)
    {
        return $department;
    }

    public function update(DepartmentRequest $request, Department $department)
    {
        $department->update($request->validated());
        return $department;
    }

    public function destroy(Department $department)
    {
        $department->delete();
        return response()->json(['message' => 'Department deleted']);
    }
}
