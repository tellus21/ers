<?php

use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\ConditionController;
use App\Http\Controllers\ExaminationClinicController;
use App\Http\Controllers\ExaminationClinicPatientController;
use App\Http\Controllers\HomeCareClinicController;
use App\Http\Controllers\HomeCareClinicNursingHomeController;
use App\Http\Controllers\HomeCareDoctorController;
use App\Http\Controllers\InstructionController;
use App\Http\Controllers\InsuranceController;
use App\Http\Controllers\NursingHomeController;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\RequestController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::apiResource('users', UserController::class);
Route::apiResource('examination_clinics', ExaminationClinicController::class);
Route::apiResource('home_care_clinics', HomeCareClinicController::class);
Route::apiResource('home_care_doctors', HomeCareDoctorController::class);
Route::apiResource('nursing_homes', NursingHomeController::class);
Route::apiResource('patients', PatientController::class);
Route::apiResource('requests', RequestController::class);
Route::apiResource('conditions', ConditionController::class);
Route::apiResource('insurances', InsuranceController::class);
Route::apiResource('instructions', InstructionController::class);
Route::apiResource('appointments', AppointmentController::class);
Route::apiResource('examination_clinic_patients', ExaminationClinicPatientController::class);
Route::apiResource('home_care_clinic_nursing_homes', HomeCareClinicNursingHomeController::class);
