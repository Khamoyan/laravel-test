<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
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
     * @return Illuminate\Http\Request
     **/

    public function request(Request $request)
    {
        $result = $request->all();
        $company = $this->companies->where('name', $result['company'])->first();
        if (!empty($company)) {
            $result['company_id'] = $company['id'];
            unset($result['_token'], $result['company'], $result['_method']);
            return $result;
        } else {
            $result['company_id'] = 0;
            unset($result['_token'], $result['company'], $result['_method']);
            return $result;
        }
    }

    public function index()
    {
        $lists = $this->employees->paginate(4);
        return response()->json([$lists], 200);
    }

    public function store(Request $request)
    {
        $result = EmployeesController::request($request);
        $this->employees->create($result);
        return response()->json($result, 200);

    }

    public function update(Request $request, $id)
    {
        $result = EmployeesController::request($request);
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
