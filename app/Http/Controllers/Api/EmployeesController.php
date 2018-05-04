<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\EmployeesRequest;
use App\Employees;
use App\Companies;

class EmployeesController extends Controller
{
    public function __construct(Employees $employees, Companies $companies)
    {
        $this->employees = $employees;
        $this->companies = $companies;
    }

    /**
     * @return Illuminate\Http\EmployeesRequests
     **/

    public function index()
    {
        $lists = $this->employees->paginate(4);
        return response()->json([$lists], 200);
    }

    public function store(EmployeesRequest $request)
    {
        // $result = EmployeesController::request($request);
        $result=$request->all();
        $this->employees->create($result);
        return response()->json($result, 200);

    }

    public function update(EmployeesRequest $request, $id)
    {
        // $result = EmployeesController::request($request);
        $this->employees->where('id', $id)->update($result);
        $employee_update = $this->employees->where('id', $id)->get();
        return response()->json($employee_update, 201);
    }

    public function destroy($id)
    {
        $delete_employee=$this->employees->where('id', $id)->get();
        $this->employees->where('id', $id)->delete();
        return response()->json($delete_employee, 200);
    }

    public function show($id)
    {
        $employee = $this->employees->where('id', $id)->first();
        $company = $this->companies->where('id', $employee['company_id'])->first();
        return response()->json([$company['name'], $employee], 200);
    }

}
