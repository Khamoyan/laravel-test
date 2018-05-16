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
     * @param App\Services\CompaniesService $companyService
     *
     * @return \Illuminate\Http\Response
     */

    public function index(CompaniesService $companyService)
    {
        $lists = $companyService->getAll(false);
        return response()->json($lists);
    }

    /**
     * Store a new company in storage.
     *
     * @param  App\Http\Requests\CompanyRequest $request
     * @param App\Services\CompaniesService     $companyService
     *
     * @return \Illuminate\Http\Response
     */

    public function store(CompanyRequest $request, CompaniesService $companyService)
    {
        $inputs = $request->inputs();
        $image = $request->file('logo');
        $result = $companyService->create($inputs, $image);
        return response()->json($result, 201);
    }

    /**
     * Update the specified company
     *
     * @param  int                          $id
     * @param App\Services\CompaniesService $companyService
     * @param  \Illuminate\Http\Request     $request
     *
     * @return \Illuminate\Http\Response
     */

    public function update(CompanyRequest $request, $id, CompaniesService $companyService)
    {
        $inputs = $request->inputs();
        $image = $request->file('logo');
        $result = $companyService->update($inputs, $id, $image);
        return response()->json(null, 204);
    }

    /**
     * Destroy the specified company
     *
     * @param  int                          $id
     * @param App\Services\CompaniesService $companyService
     *
     * @return \Illuminate\Http\Response
     */

    public function destroy($id, CompaniesService $companyService)
    {
        $companyService->delete($id);
        return response()->json(null, 204);
    }

    /**
     * Show the specified company
     *
     * @param  int                          $id
     * @param App\Services\CompaniesService $companyService
     *
     * @return \Illuminate\Http\Response
     */

    public function show($id, CompaniesService $companyService)
    {
        $company = $companyService->getById($id);
        return response()->json($company);
    }

}
