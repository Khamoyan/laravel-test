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

        return $result;
    }

    public function index()
    {

        $lists =$this->employees->get();
        return $lists;
        return response()->json(['employees', $lists], 200);
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
        return response()->json(201);
    }

    public function destroy($id)
    {
        $this->employees->where('id', $id)->delete();
        return response()->json('asasa', 200);
    }

    public function show($id)
    {
        $employee = $this->employees->where('id', $id)->first();
        $company = $this->companies->where('id', $employee['company_id'])->first();

//        return view('employees.show', [
//            'employee' => $employee,
//            'company' => $company,
//        ]);
    }

}
