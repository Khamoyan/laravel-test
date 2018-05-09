<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Moels\Employee;
use App\Http\Requests\CompaniesRequest;

class CompaniesController extends Controller
{
    public function __construct()
    {
    }

    /**
     * @return \Illuminate\Http\Response
     */

    public function index()
    {
        $lists=Company::paginate(10);
        return view('companies.index',['lists'=>$lists]);
    }

    public function store(CompaniesRequest $request)
    {
        $result = $request->all();
        if ($request->hasfile('logo')) {
            $image = $request->file('logo');
            $result['logo'] = time() . '.' . $image->getClientOriginalExtension();
            $destinationPath = storage_path('app/public/logos');
            Company::create($result);
            if (Company::create($result)) {
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
            $destinationPath = storage_path('app/public/logos');
            if (Company::where('id', $id)->update($result)) {
                $image->move($destinationPath, $result['logo']);
            }
        }
        return back();
    }

    public function destroy($id)
    {
        Company::where('id', $id)->delete();
        return back();
    }

    public function show($id)
    {
        $company=Company::with('employees')->where('id',$id)->first();
        return view('companies.show',['company'=>$company]);
    }
}
