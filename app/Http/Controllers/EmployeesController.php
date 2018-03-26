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
    	return view('employees.index');
    }
}
