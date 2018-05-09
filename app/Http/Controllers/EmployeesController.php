<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Models\Company;
use App\Http\Requests\EmployeesRequest;

class EmployeesController extends Controller
{

    /**
     * @return Illuminate\Http\Request
     **/

    public function index()
    {
        $lists=Employee::paginate(4);
        // $companiesLists=$this->companies->all();
        return view('employees.index',compact('lists'));
    }

    public function store(EmployeesRequest $request)
    {
        $result = $request->inputs();
        Employee::create($result);
        return back();        
    }

    public function update(EmployeesRequest $request, $id)
    {

        $result = $request->inputs();
        Employee::where('id', $id)->update($result);
        return back();   
    }

    public function destroy($id)
    {
        Employee::where('id', $id)->delete();
        return redirect('/employeess');
    }

    public function show($id)
    {
        $employee = Employee::with('company')->where('id',$id)->first();
        return view('employees.show',['employee'=>$employee]);
    }
}
