<?php

namespace App\Http\Controllers;

use App\Http\Requests\InstructionRequest;
use App\Models\Instruction;

class InstructionController extends Controller
{
    public function index()
    {
        return Instruction::all();
    }

    public function store(InstructionRequest $request)
    {
        $instruction = Instruction::create($request->validated());
        return $instruction;
    }

    public function show(Instruction $instruction)
    {
        return $instruction;
    }

    public function update(InstructionRequest $request, Instruction $instruction)
    {
        $instruction->update($request->validated());
        return $instruction;
    }

    public function destroy(Instruction $instruction)
    {
        $instruction->delete();
        return response()->json(['message' => 'Instruction deleted']);
    }
}
