<?php

namespace App\Http\Controllers;

use App\Http\Requests\RequestRequest;
use App\Models\Request;

class RequestController extends Controller
{
    public function index()
    {
        $rquests = Request::with(['user', 'patient','patient.homeCareClinic','patient.nursingHome'])->get();
        return response()->json($rquests);
    }

    public function store(RequestRequest $request)
    {
        $request = Request::create($request->validated());
        return $request;
    }

    public function show(Request $request)
    {
        $request = Request::with(['user', 'patient',  'patient.homeCareDoctor', 'patient.nursingHome'])->find($request->id);
        return response()->json($request);
    }

    public function update(RequestRequest $request, Request $requestModel)
    {
        $requestModel->update($request->validated());
        return $requestModel;
    }

    public function destroy(Request $request)
    {
        $request->delete();
        return response()->json(['message' => 'Request deleted']);
    }
}
