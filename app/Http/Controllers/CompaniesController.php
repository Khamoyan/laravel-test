<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Companies;
use App\Employees;
use App\Http\Request\CompaniesRequest;

class CompaniesController extends Controller
{
	public function __construct(Companies $companies, Employees $employees){
		$this->companies=$companies;
        $this->employees=$employees;
	}
    /**
     * @return \Illuminate\Http\Response
     */
    
    public function index()
    {
        $complists=$this->companies->paginate(10);
        return view('companies.index',['complists'=>$complists]);
    }

    public function store(Request $request){
        
        $this->validate($request, [
                'logo' => 'required',
                'logo' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048|dimensions:min_width=100,min_height=100'
        ]);
           

        $request->except(['_token', '_method']);
        $result=$request->all();
        if($request->hasfile('logo'))
         {
            $image=$request->file('logo');
            $result['logo'] = time().'.'.$image->getClientOriginalExtension();
            $destinationPath = public_path('/logos');
            if($this->companies->create($result)){
                $image->move($destinationPath, $result['logo']);
            }
         }
        return back();
     }

    public function update(Request $request,$id){
        $result=$request->all();
        unset($result['_token']);
        unset($result['_method']);
        
        $this->companies->where('id',$id)->update($result);

        return back();
    }

    public function destroy($id){
        
        $this->companies->where('id',$id)->delete();
        return back();
    }

    public function show($id){
        $companies=$this->companies->where('id',$id)->first();
        $employees=$this->employees->where('company_id',$id)->get();
        return view('companies.show',['companies'=>$companies,'employeess'=>$employees]);
    }
}
