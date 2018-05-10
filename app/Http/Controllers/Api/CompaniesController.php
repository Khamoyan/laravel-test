<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\CompanyRequest;
use App\Http\Controllers\Controller;
use App\Models\Company;

class CompaniesController extends Controller
{
    
    public function index()
    {
        $lists = Company::all();
        return response()->json($lists,200);
    }

    public function store(CompanyRequest $request)
    {
        $result = $request->inputs();
        if ($request->hasfile('logo')) {
            $destinationPath = storage_path('app/public/logos');
            if (!file_exists($destinationPath)) {
                File::makeDirectory($destinationPath);
            }
            $image = $request->file('logo');
            $result['logo'] = time() . '.' . $image->getClientOriginalExtension();
            if (Company::create($result)) {
                $image->move($destinationPath, $result['logo']);
            }
        }
        return response()->json($result, 201);
    }

    public function update(CompanyRequest $request, $id)
    {
        $result = $request->inputs();
        if ($request->hasfile('logo')) {
            $destinationPath = storage_path('app/public/logos');
            if (!file_exists($destinationPath)) {
                File::makeDirectory($destinationPath);
            }
            $image = $request->file('logo');
            $result['logo'] = time() . '.' . $image->getClientOriginalExtension();
            if (Company::where('id', $id)->update($result)) {
                $image->move($destinationPath, $result['logo']);
            }
        }
        $company = Company::where('id', $id)->first();
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
