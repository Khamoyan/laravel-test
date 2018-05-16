<?php

namespace App\Http\Controllers;

use App\Services\CompaniesService;
use App\Http\Requests\CompanyRequest;

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
        $lists = $companyService->getAll(true);
        return view('companies.index', ['lists' => $lists]);
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
        return back();
    }

    /**
     * Update the specified company
     *
     * @param  int                              $id
     * @param  App\Http\Requests\CompanyRequest $request
     * @param App\Services\CompaniesService     $companyService
     *
     * @return \Illuminate\Http\Response
     */

    public function update(CompanyRequest $request, $id, CompaniesService $companyService)
    {
        $inputs = $request->inputs();
        $image = $request->file('logo');
        $result = $companyService->update($inputs, $id, $image);
        return back();
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
        $CompanyService->delete($id);
        return redirect('/companies');
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
        return view('companies.show', ['company' => $company]);
    }

}
