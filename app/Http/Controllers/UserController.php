<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Models\User;

class UserController extends Controller
{
    public function index()
    {
        $users = User::with(['homeCareClinic', 'examinationClinic'])->get();
        return response()->json($users);
    }

    public function store(UserRequest $request)
    {
        $user = User::create($request->validated());
        return $user;
    }

    public function show(User $user)
    {
        return $user;
    }

    public function update(UserRequest $request, User $user)
    {
        $user->update($request->validated());
        return $user;
    }

    public function destroy(User $user)
    {
        $user->delete();
        return response()->json(['message' => 'User deleted']);
    }
}
