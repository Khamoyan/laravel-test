<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Employees;

class EmployeesController extends Controller
{
	public function __construct(Employees $employees){
		$this->employees=$employees;
	}
    /**
    *@return Illuminate\Http\Request
    **/

    public function index(){
    	$list=$this->employees->all();
    	return view('employees.index',compact('list'));
    }
    public function store(Request $request){
        $result=$request->all();
        unset($result['_token']);
        $this->employees->create($result);
         return back()->with('success', 'Your images has been successfully');

    }
}
