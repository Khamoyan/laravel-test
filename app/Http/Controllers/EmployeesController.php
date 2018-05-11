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
     * @param App\Services\EmployeesService $employee_service
     * @param App\Services\CompaniesService $company_service
     *
     * @return \Illuminate\Http\Response
     */

    public function index(EmployeesService $employee_service, CompaniesService $company_service)
    {

        $lists = $employee_service->getAllEmployeesWeb();
        $companies = $company_service->getAllCompaniesWeb();
        return view('employees.index', compact('lists', 'companies'));
    }

    /**
     * Store a new employee in storage.
     *
     * @param App\Services\EmployeesService       $employee_service
     * @param  \App\Http\Requests\EmployeeRequest $request
     *
     * @return \Illuminate\Http\Response
     */

    public function store(EmployeeRequest $request, EmployeesService $employee_service)
    {
        $inputs = $request->inputs();
        $result = $employee_service->createEmployee($inputs);
        return back();
    }

    /**
     * Update the specified employee
     *
     * @param App\Services\EmployeesService       $employee_service
     * @param  \App\Http\Requests\EmployeeRequest $request
     *
     * @return \Illuminate\Http\Response
     */

    public function update(EmployeeRequest $request, $id, EmployeesService $employee_service)
    {
        $inputs = $request->inputs();
        $employee_service->updateEmployee($inputs, $id);
        return back();
    }

    /**
     * Destroy the specified employee
     *
     * @param  int                          $id
     * @param App\Services\EmployeesService $employee_service
     *
     * @return \Illuminate\Http\Response
     */

    public function destroy($id, EmployeesService $employee_service)
    {
        $employee_service->deleteEmployee($id);
        return redirect('/employees');
    }

    /**
     * Show the specified employee
     *
     * @param  int                          $id
     * @param App\Services\EmployeesService $employee_service
     *
     * @return \Illuminate\Http\Response
     */

    public function show($id, EmployeesService $employee_service)
    {
        $employee = $employee_service->showEmployee($id);
        return view('employees.show', ['employee' => $employee]);
    }

}
