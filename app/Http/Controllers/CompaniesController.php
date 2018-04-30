<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
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

    public function request(Request $request)
    {
        $result = $request->all();
        $this->validate($request, [
            'logo' => 'required',
            'logo' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048|dimensions:min_width=100,min_height=100'
        ]);
        unset($result['_token'],$result['_method']);

        return $result;
    }

    public function index()
    {
        $lists = $this->companies->get();
        $lists=$this->companies->paginate(10);
        return view('companies.index',['lists'=>$lists]);
    }

    public function store(Request $request)
    {
        $result = CompaniesController::request($request);
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

    public function update(Request $request, $id)
    {
        dd($request);
        $result = CompaniesController::request($request);
        if ($request->hasfile('logo')) {

            $image = $request->file('logo');
            $result['logo'] = time() . '.' . $image->getClientOriginalExtension();
            $destinationPath = public_path('/logos');
            if ($this->companies->where('id', $id)->update($result)) {
                $image->move($destinationPath, $result['logo']);
            }
        }
        return response()->json(201);
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
