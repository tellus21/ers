<?php

namespace App\Http\Controllers;

use App\Http\Requests\RequestRequest;
use App\Models\Request;

class RequestController extends Controller
{
    public function index()
    {
        $rquests = Request::with(['user', 'patient'])->get();
        return response()->json($rquests);
    }

    public function store(RequestRequest $request)
    {
        $request = Request::create($request->validated());
        return $request;
    }

    public function show(Request $request)
    {
        return $request;
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
