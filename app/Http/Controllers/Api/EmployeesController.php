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
     * @param App\Services\EmployeesService $employeeService
     *
     * @return \Illuminate\Http\Response
     */

    public function index(EmployeesService $employeeService)
    {
        $lists = $employeeService->getAll(false);
        return response()->json($lists);
    }

    /**
     * Store a new employee in storage.
     *
     * @param App\Services\EmployeesService       $employeeService
     * @param  \App\Http\Requests\EmployeeRequest $request
     *
     * @return \Illuminate\Http\Response
     */

    public function store(EmployeeRequest $request, EmployeesService $employeeService)
    {
        $inputs = $request->inputs();
        $result = $employeeService->create($inputs);
        return response()->json($result, 201);

    }

    /**
     * Update the specified employee
     *
     * @param App\Services\EmployeesService       $employeeService
     * @param  \App\Http\Requests\EmployeeRequest $request
     *
     * @return \Illuminate\Http\Response
     */

    public function update(EmployeeRequest $request, $id, EmployeesService $employeeService)
    {
        $inputs = $request->inputs();
        $employeeService->update($inputs, $id);
        return response()->json(null, 204);
    }

    /**
     * Destroy the specified employee
     *
     * @param  int                          $id
     * @param App\Services\EmployeesService $employeeService
     *
     * @return \Illuminate\Http\Response
     */

    public function destroy($id, EmployeesService $employeeService)
    {
        $employeeService->delete($id);
        return response()->json(null, 204);
    }

    /**
     * Show the specified employee
     *
     * @param  int                          $id
     * @param App\Services\EmployeesService $employeeService
     *
     * @return \Illuminate\Http\Response
     */

    public function show($id, EmployeesService $employeeService)
    {
        $employee = $employeeService->getById($id);
        return response()->json($employee);
    }

}
