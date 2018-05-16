<?php

namespace App\Http\Controllers;

use App\Services\EmployeesService;
use App\Services\CompaniesService;
use App\Http\Requests\EmployeeRequest;

class EmployeesController extends Controller
{

    /**
     * Get all the employees
     *
     * @param App\Services\EmployeesService $employeeService
     * @param App\Services\CompaniesService $CompanyService
     *
     * @return \Illuminate\Http\Response
     */

    public function index(EmployeesService $employeeService, CompaniesService $companyService)
    {

        $lists = $employeeService->getAll(true);
        $companies = $companyService->getAll(false);
        return view('employees.index', compact('lists', 'companies'));
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
        return back();
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
        return back();
    }

    /**
     * Destroy the specified employee
     *
     * @param  int                          $id
     * @param App\Services\EmployeesService $EmployeeService
     *
     * @return \Illuminate\Http\Response
     */

    public function destroy($id, EmployeesService $employeeService)
    {
        $employeeService->delete($id);
        return redirect('/employees');
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
        return view('employees.show', ['employee' => $employee]);
    }

}
