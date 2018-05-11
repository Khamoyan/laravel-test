<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\CompanyRequest;
use App\Http\Controllers\Controller;
use App\Services\CompaniesService;

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
        $lists = $company_service->getAllCompanies();
        return response()->json($lists);
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
        return response()->json($result, 201);
    }

    /**
     * Update the specified company
     *
     * @param  int                          $id
     * @param App\Services\CompaniesService $company_service
     * @param  \Illuminate\Http\Request     $request
     *
     * @return \Illuminate\Http\Response
     */

    public function update(CompanyRequest $request, $id, CompaniesService $company_service)
    {
        $inputs = $request->inputs();
        $image = $request->file('logo');
        $result = $company_service->updateCompany($inputs, $id, $image);
        return response()->json(null, 204);
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
        return response()->json(null, 204);
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
        $company = $company_service->showCompany($id);
        return response()->json($company);
    }

}
