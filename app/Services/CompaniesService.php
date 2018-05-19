<?php

namespace App\Services;

use App\Models\Company;

class CompaniesService
{
    /**
     * Get all the companies
     *
     * @param bool    $is_a_number_page
     */

    public function getAll($is_a_number_page)
    {
        if(!$is_a_number_page){

            $result = Company::all();
            
        } else{

            $result = Company::paginate(3);
        }

        return $result;
    }

    /**
     * Store a new company
     *
     * @param array    $inputs
     * @param file     $image
     */

    public function create($inputs, $image)
    {
        $destinationPath = storage_path('app/public/logos');
        if (!is_dir($destinationPath)) {
            File::makeDirectory($destinationPath);
        }

        $inputs['logo'] = time() . '.' . $image->getClientOriginalExtension();
        $result = Company::create($inputs);
        if($result) {
            $image->move($destinationPath, $inputs['logo']);
        }
        return $result;
    }

    /**
     * Update the specified  company
     *
     * @param array    $inputs
     * @param int      $id
     * @param file     $image
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
     * @param int     $id
     */

    public function delete($id)
    {
        $result = Company::where('id', $id)->delete();
        return $result;
    }

    /**
     * Show the specified company
     *
     * @param int     $id
     */

    public function getById($id)
    {
        $company = Company::with('employees')->where('id', $id)->first();
        return $company;
    }

}

