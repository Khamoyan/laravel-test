<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\CompaniesRequest;
use App\Http\Controllers\Controller;
use App\Companies;
use App\Employees;

class CompaniesController extends Controller
{
    public function __construct(Companies $companies, Employees $employees)
    {
        $this->companies = $companies;
        $this->employees = $employees;
    }


    public function index()
    {
        $lists = $this->companies->get();
        return response()->json([$lists], 200);
    }

    public function store(CompaniesRequest $request)
    {
        $result = $request->all();
        if ($request->hasfile('logo')) {
            $image = $request->file('logo');
            $result['logo'] = time() . '.' . $image->getClientOriginalExtension();
            $destinationPath = public_path('/logos');
            if ($this->companies->create($result)) {
                $image->move($destinationPath, $result['logo']);
            }
        }
        return response()->json($result, 201);
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
        $update_company = $this->companies->where('id', $id)->get();
        return response()->json($update_company, 201);
    }

    public function destroy($id)
    {
        $delete_company = $this->companies->where('id', $id)->get();
        $this->companies->where('id', $id)->delete();
        return response()->json($delete_company, 200);
    }

    public function show($id)
    {
        $company = $this->companies->where('id', $id)->first();
        $employees = $this->employees->where('company_id', $id)->get();
        return response()->json([$company], 200);
    }
}
