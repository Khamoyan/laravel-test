<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Companies;

class CompaniesController extends Controller
{
	public function __construct(Companies $companies){
		$this->companies=$companies;
	}
    /**
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $complist=$this->companies->all();

        return view('companies.index',compact('complist'));
    }

    public function store(Request $request){
         $this->validate($request, [

                'logo' => 'required',
                'logo' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048'

        ]);
        if($request->hasfile('logo'))
         {
            $image=$request->file('logo');
            $input['logo'] = time().'.'.$image->getClientOriginalExtension();
            $destinationPath = storage_path('app/public/logos');
            $image->move($destinationPath, $input['logo']);
         }
        $result=$request->all();
        unset($result['_token']);
        $this->companies->create($result);
        // dd($result);

        return back()->with('success', 'Your images has been successfully');
    }
}
