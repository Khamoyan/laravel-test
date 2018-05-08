<?php

namespace App\Http\Controllers;

use App\Employees;
use App\Companies;
use App\Http\Requests\EmployeesRequest;

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

    public function index()
    {
        $lists=$this->employees->paginate(4);
        $companiesLists=$this->companies->all();
        return view('employees.index',compact('lists','companiesLists'));
    }

    public function store(EmployeesRequest $request)
    {
        $result = $request->inputs();
        $this->employees->create($result);
        return back();        
    }

    public function update(EmployeesRequest $request, $id)
    {

        $result = $request->inputs();
        $this->employees->where('id', $id)->update($result);
        return back();   
    }

    public function destroy($id)
    {
        $this->employees->where('id', $id)->delete();
    
        return redirect('/employeess');
    }

    public function show($id)
    {
        $employee = $this->employees->where('id', $id)->first();
        $company = $this->companies->where('id', $employee['company_id'])->first();
        return view('employees.show',['employee'=>$employee, 'company'=>$company,]);
    }
}
