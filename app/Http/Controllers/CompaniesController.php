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
        return view('companies.index');
    }

    public function create(){

    }


}
