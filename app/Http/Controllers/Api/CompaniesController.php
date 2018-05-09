<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\CompaniesRequest;
use App\Http\Controllers\Controller;
use App\Models\Company;

class CompaniesController extends Controller
{
    public function __construct()
    {
    }

    public function index()
    {
        $lists = Company::all();
        return response()->json($lists);
    }

    public function store(CompaniesRequest $request)
    {
        $result = $request->inputs();
        if ($request->hasfile('logo')) {
            $image = $request->file('logo');
            $result['logo'] = time() . '.' . $image->getClientOriginalExtension();
            $destinationPath = '../storage/logos';
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
            $destinationPath = '../storage/logos';
            if (Company::where('id', $id)->update($result)) {
                $image->move($destinationPath, $result['logo']);
            }
        }
        $company = Company::where('id', $id)->get();
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
        $company=Company::with('employees')->where('id',$id)->first();
        return response()->json($company, 200);
    }
}
