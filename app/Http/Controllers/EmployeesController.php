<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Employees;
use App\Companies;

class EmployeesController extends Controller
{
	public function __construct(Employees $employees, Companies $companies){
		$this->employees=$employees;
        $this->companies=$companies;
	}
    /**
    *@return Illuminate\Http\Request
    **/

    public function index(){
    	$lists=$this->employees->paginate(4);
    	return view('employees.index',compact('lists'));
    }
    public function store(Request $request){
        $result=$request->all();
        unset($result['_token']);
        $comapi=$this->companies->where('name',$result['company'])->first();
        $result['company_id']=$comapi['id'];
        unset($result['company']);
        $this->employees->create($result);
         return back();
    }
    public function update(Request $request, $id){
        $result=$request->all();
        unset($result['_token']);
        unset($result['_method']);
        $this->employees->where('id',$id)->update($result);
        return back();   
    }
    public function destroy ($id){
        $this->employees->where('id',$id)->delete();
        return back();
    }
    public function show($id){

        $employees=$this->employees->where('id',$id)->first();
        $companies=$this->companies->where('id',$employees['company_id'])->first();

        return view('employees.show',[
            'employees'=>$employees,
            'companies'=>$companies,
            ]);
    }

}
