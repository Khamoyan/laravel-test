<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Models\Company;
use App\Http\Requests\EmployeeRequest;

class EmployeesController extends Controller
{

    /**
     * @return Illuminate\Http\Request
     **/

    public function index()
    {
        $lists=Employee::paginate(4);
        $companies=Company::all();
        return view('employees.index',compact('lists','companies'));
    }

    public function store(EmployeeRequest $request)
    {
        $result = $request->inputs();
        unset($result['_method'],$result['_token']);
        Employee::create($result);
        return back();        
    }

    public function update(EmployeeRequest $request, $id)
    {

        $result = $request->inputs();
        unset($result['_method'],$result['_token']);
        Employee::where('id', $id)->update($result);
        return back();   
    }

    public function destroy($id)
    {
        Employee::where('id', $id)->delete();
        return redirect('/employees');
    }

    public function show($id)
    {
        $employee = Employee::with('company')->where('id',$id)->first();
        return view('employees.show',['employee'=>$employee]);
    }
}
