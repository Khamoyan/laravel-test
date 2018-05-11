<?php

namespace App\Services;

use App\Models\Company;

class CompaniesService
{
    /**
     * Get all the companies for Api
     *
     */
    
    public function index()
    {
        $result = Company::all();
        return $result;
    }

     /**
     * Get all the companies for web
     *
     */

    public function indexWeb()
    {
        $result = Company::paginate(4);
        return $result;
    }

     /**
     * Store a new company
     *
     */

    public function store($inputs, $image)
    {
        $destinationPath = storage_path('app/public/logos');
        if (!is_dir($destinationPath)) {
                File::makeDirectory($destinationPath);
         }

        $inputs['logo'] = time() . '.' . $image->getClientOriginalExtension();
        if (Company::create($inputs)) {
            $image->move($destinationPath, $inputs['logo']);
        }
        return $inputs;
    }

     /**
     * Update the specified  company
     *
     */

    public function update($inputs, $id, $image)
    {
        $destinationPath = storage_path('app/public/logos');
        if (!is_dir($destinationPath)) {
                File::makeDirectory($destinationPath);
         }

        $inputs['logo'] = time() . '.' . $image->getClientOriginalExtension();
        if (Company::where('id', $id)->update($inputs)) {
            $image->move($destinationPath, $inputs['logo']);
        }
        return $inputs;
    }

     /**
     * Delete the specified company
     *
     */

    public function destroy($id)
    {
        $result = Company::where('id', $id)->delete();
        return $result;
    }

     /**
     * Show the specified company
     *
     */

    public function show($id)
    {
        $company = Company::with('employees')->where('id',$id)->first();
        return $company;
    }

}

