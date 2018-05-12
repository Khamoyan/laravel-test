<?php

namespace App\Http\Controllers;

use App\Services\CompaniesService;
use App\Http\Requests\CompanyRequest;

class CompaniesController extends Controller
{

    /**
     * Get all the companies
     *
     * @param App\Services\CompaniesService $company_service
     *
     * @return \Illuminate\Http\Response
     */

    public function index(CompaniesService $company_service)
    {
        $lists = $company_service->getAllCompaniesWeb();
        return view('companies.index', ['lists' => $lists]);
    }

    /**
     * Store a new company in storage.
     *
     * @param  App\Http\Requests\CompanyRequest $request
     * @param App\Services\CompaniesService     $company_service
     *
     * @return \Illuminate\Http\Response
     */

    public function store(CompanyRequest $request, CompaniesService $company_service)
    {
        $inputs = $request->inputs();
        $image = $request->file('logo');
        $result = $company_service->createCompany($inputs, $image);
        return back();
    }

    /**
     * Update the specified company
     *
     * @param  int                              $id
     * @param  App\Http\Requests\CompanyRequest $request
     * @param App\Services\CompaniesService     $company_service
     *
     * @return \Illuminate\Http\Response
     */

    public function update(CompanyRequest $request, $id, CompaniesService $company_service)
    {
        $inputs = $request->inputs();
        $image = $request->file('logo');
        $result = $company_service->updateCompany($inputs, $id, $image);
        return back();
    }

    /**
     * Destroy the specified company
     *
     * @param  int                          $id
     * @param App\Services\CompaniesService $company_service
     *
     * @return \Illuminate\Http\Response
     */

    public function destroy($id, CompaniesService $company_service)
    {
        $company_service->deleteCompany($id);
        return redirect('/companies');
    }

    /**
     * Show the specified company
     *
     * @param  int                          $id
     * @param App\Services\CompaniesService $company_service
     *
     * @return \Illuminate\Http\Response
     */

    public function show($id, CompaniesService $company_service)
    {
        $company = $company_service->getCompanyById($id);
        return view('companies.show', ['company' => $company]);
    }

}
