<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
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

    /**
     * @return Illuminate\Http\Request
     **/

    public function request(Request $request)
    {
        $this->validate($request, [
            'logo' => 'required',
            'logo' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048|dimensions:min_width=100,min_height=100'
        ]);
        $result = $request->all();
        // dd($result);
        return $result;
    }

    public function index()
    {
        $lists = $this->companies->get();
        return response()->json([$lists], 200);
    }

    public function store(Request $request)
    {
        $result = CompaniesController::request($request);
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

    public function update(Request $request, $id)
    {
        $result = CompaniesController::request($request);
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
        $delete_company=$this->companies->where('id',$id)->get();
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
