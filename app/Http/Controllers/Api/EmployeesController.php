<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\EmployeeRequest;
use App\Services\EmployeesService;

class EmployeesController extends Controller
{

    /**
     * Get all the employees
     * 
     * @param App\Services\EmployeesService $employee_service
     * @return \Illuminate\Http\Response
     */

    public function index(EmployeesService $employee_service)
    {
        $lists = $employee_service->index();
        return response()->json($lists);
    }

     /**
     * Store a new employee in storage.
     *
     * @param App\Services\EmployeesService $employee_service
     * @param  \App\Http\Requests\EmployeeRequest  $request
     * @return \Illuminate\Http\Response
     */

    public function store(EmployeeRequest $request, EmployeesService $employee_service)
    {
        $inputs = $request->inputs();
        $result = $employee_service->store($inputs);
        return response()->json($result, 201);

    }

      /**
     * Update the specified employee
     *
     * @param App\Services\EmployeesService $employee_service
     * @param  \App\Http\Requests\EmployeeRequest  $request
     * @return \Illuminate\Http\Response
     */

    public function update(EmployeeRequest $request, $id, EmployeesService $employee_service)
    {
        $inputs = $request->inputs();
        $employee_service->update($inputs,$id);
        return response()->json(null, 204);
    }

    /**
     * Destroy the specified employee 
     *
     * @param  int  $id
     * @param App\Services\EmployeesService $employee_service
     * @return \Illuminate\Http\Response
     */

    public function destroy($id, EmployeesService $employee_service)
    {
        $employee_service->destroy($id);
        return response()->json(null, 204);
    }

    /**
     * Show the specified employee 
     *
     * @param  int  $id
     * @param App\Services\EmployeesService $employee_service
     * @return \Illuminate\Http\Response
     */

    public function show($id, EmployeesService $employee_service)
    {
        $employee = $employee_service->show($id);
        return response()->json($employee);
    }

}
