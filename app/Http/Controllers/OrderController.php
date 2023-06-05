<?php

namespace App\Http\Controllers;

use App\Http\Requests\OrderRequest;
use App\Models\Order;

class OrderController extends Controller
{
    public function index()
    {
        $orders = Order::with(['user', 'patient', 'patient.homeCareClinic', 'patient.nursingHome', 'condition'])->get();
        return response()->json($orders);
    }

    public function store(OrderRequest $request)
    {
        $order = Order::create($request->validated());
        return $order;
    }

    public function show(Order $order)
    {
        $order = Order::with(['user', 'patient',  'patient.homeCareDoctor', 'patient.nursingHome'])->find($order->id);
        return response()->json($order);
    }

    public function update(OrderRequest $request, Order $order)
    {
        $order->update($request->validated());
        return $order;
    }

    public function destroy(Order $order)
    {
        $order->delete();
        return response()->json(['message' => 'Order deleted']);
    }
}
