<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\CompaniesRequest;
use App\Http\Controllers\Controller;
use App\Company;
use App\Employee;

class CompaniesController extends Controller
{
    public function __construct()
    {
    }

    public function index()
    {
        $lists = Company::with('companies')->get();
        dd('asas', $lists);
        return response()->json($lists, 200);
    }

    public function store(CompaniesRequest $request)
    {
        $result = $request->inputs();
        if ($request->hasfile('logo')) {
            $image = $request->file('logo');
            $result['logo'] = time() . '.' . $image->getClientOriginalExtension();
            $destinationPath = storage_path('app/public//logos');
            if (Company::create($result)) {
                $image->move($destinationPath, $result['logo']);
            }
        }
        return response()->json($result, 201);
    }

    public function update(CompaniesRequest $request, $id)
    {
        $result = $request->inputs();
        unset($result['_method'],$result['token']);
        if ($request->hasfile('logo')) {
            $image = $request->file('logo');
            $result['logo'] = time() . '.' . $image->getClientOriginalExtension();
            $destinationPath = public_path('storage/logos');
            if (Company::where('id', $id)->update($result)) {
                $image->move($destinationPath, $result['logo']);
            }
        }
        $company = $this->companies->where('id', $id)->get();
        return response()->json($company, 201);
    }

    public function destroy($id)
    {
        $company = Company::where('id', $id)->first();
        Company::where('id', $id)->delete();
        return response()->json($company, 200);
    }

    public function show($id)
    {
        $company = Company::where('id', $id)->first();
        $employees =Employee::where('company_id', $id)->first();
        return response()->json($company, 200);
    }
}
