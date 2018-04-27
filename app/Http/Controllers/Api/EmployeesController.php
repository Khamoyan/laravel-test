<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Employees;
use App\Companies;

class EmployeesController extends Controller
{
	public function __construct(Employees $employees, Companies $companies)
    {
		$this->employees=$employees;
        $this->companies=$companies;
	}

    /**
    *@return Illuminate\Http\Request
    **/

    public function request(Request $request)
    {
        $result=$request->all();
        // $company=$this->companies->where('name',$result['company'])->first();
        // dd($company);
        // if(!empty($company)) {
        //     $result['company_id']=$company['id'];
        //     unset($result['_token'],$result['company'],$result['_method']);
        //     return $result;
        // } else {
        //     $result['company_id']=0;
        //     unset($result['_token'],$result['company'],$result['_method']);
        //     return $result;
        // }
        // dd($result['employees']);
        return $result['employees'];
    }

    public function index()
    {
        $lists=$this->employees->get();
        return response()->json(['employees', $lists],200);
    }

    public function store(Request $request)
    {
        $result=EmployeesController::request($request);
        $this->employees->create($result);
        return response()->json($result, 201);
        
    }

    public function update(Request $request, $id)
    {
        $result=EmployeesController::request($request);
        $this->employees->where('id',$id)->update($result);
        return response()->json(200); 
    }

    public function destroy ($id)
    {
        $this->employees->where('id',$id)->delete();
        return response()->json('asasa');
    }
    
    public function show($id)
    {
        $employee=$this->employees->where('id',$id)->first();
        $company=$this->companies->where('id',$employee['company_id'])->first();

        return view('employees.show',[
            'employee'=>$employee,
            'company'=>$company,
            ]);
    }

}
