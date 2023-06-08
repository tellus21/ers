<?php

namespace App\Http\Controllers;

use App\Http\Requests\ImportantPointRequest;
use App\Models\ImportantPoint;

class ImportantPointController extends Controller
{
    public function index()
    {
        return ImportantPoint::all();
    }

    public function store(ImportantPointRequest $request)
    {
        $importantPoint = ImportantPoint::create($request->validated());
        return $importantPoint;
    }

    public function show(ImportantPoint $importantPoint)
    {
        return $importantPoint;
    }

    public function update(ImportantPointRequest $request, ImportantPoint $importantPoint)
    {
        $importantPoint->update($request->validated());
        return $importantPoint;
    }

    public function destroy(ImportantPoint $importantPoint)
    {
        $importantPoint->delete();
        return response()->json(['message' => 'Home care doctor deleted']);
    }
}
