<?php

namespace App\Http\Controllers;

use App\Companies;
use App\Employees;
use App\Http\Request\CompaniesRequest;

class CompaniesController extends Controller
{
    public function __construct(Companies $companies, Employees $employees)
    {
        $this->companies = $companies;
        $this->employees = $employees;
    }

    /**
     * @return \Illuminate\Http\Response
     */

    public function index()
    {
        $lists = $this->companies->get();
        $lists=$this->companies->paginate(10);
        return view('companies.index',['lists'=>$lists]);
    }

    public function store(CompaniesRequest $request)
    {
        $result = $request->all();
        if ($request->hasfile('logo')) {
            $image = $request->file('logo');
            $result['logo'] = time() . '.' . $image->getClientOriginalExtension();
            $destinationPath = public_path('/logos');
            $this->companies->create($result);
            if ($this->companies->create($result)) {
                $image->move($destinationPath, $result['logo']);
            }
        }
        return back();
    }

    public function update(CompaniesRequest $request, $id)
    {
        $result = $request->all();
        if ($request->hasfile('logo')) {

            $image = $request->file('logo');
            $result['logo'] = time() . '.' . $image->getClientOriginalExtension();
            $destinationPath = public_path('/logos');
            if ($this->companies->where('id', $id)->update($result)) {
                $image->move($destinationPath, $result['logo']);
            }
        }
        return back();
    }

    public function destroy($id)
    {
        $this->companies->where('id', $id)->delete();
        return back();
    }

    public function show($id)
    {
        $company = $this->companies->where('id', $id)->first();
        $employees = $this->employees->where('company_id', $id)->get();
        return view('companies.show',['company'=>$company,'employees'=>$employees]);
    }
}
