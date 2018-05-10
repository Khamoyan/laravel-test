<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\EmployeeRequest;
use App\Models\Employee;

class EmployeesController extends Controller
{
    
    public function index()
    {
        $lists = Employee::all();
        return response()->json($lists, 200);
    }

    public function store(EmployeeRequest $request)
    {
        $result = $request->inputs();
        Employee::create($result);
        return response()->json($result, 201);

    }

    public function update(EmployeeRequest $request, $id)
    {
        $result = $request->inputs();
        Employee::where('id', $id)->update($result);
        $employee =Employee::where('id', $id)->first();
        return response()->json($employee, 201);
    }

    public function destroy($id)
    {
        $employee = Employee::where('id', $id)->first();
        Employee::where('id', $id)->delete();
        return response()->json($employee, 200);
    }

    public function show($id)
    {
        $employee = Employee::with('company')->where('id',$id)->first();   
        return response()->json($employee, 200);
    }

}
