<?php

namespace App\Services;

use App\Http\Requests\EmployeeRequest;
use App\Models\Employee;

class EmployeesService
{

    /**
     * Get all the employees for Api
     *
     * @param bool   $is_a_number_page
     */

    public function getAll($is_a_number_page)
    {
        if(!$is_a_number_page){

            $result = Employee::all();

        } else {
            
            $result = Employee::paginate(3);
        }
        
        return $result;
    }

    /**
     * Store a new employee
     *
     * @param array   $inputs
     */

    public function create($inputs)
    {
        $result = Employee::create($inputs);
        return $result;
    }

    /**
     * Update the specified employee
     *
     * @param array   $inputs
     * @param int     $id
     */

    public function update($inputs, $id)
    {
        $result = Employee::where('id', $id)->update($inputs);
        return $result;
    }

    /**
     * Delete the specified employee
     *
     * @param int     $id
     */

    public function delete($id)
    {
        $result = Employee::where('id', $id)->delete();
        return $result;
    }

    /**
     * Show the specified employee
     *
     * @param int    $id
     */

    public function getById($id)
    {
        $result = Employee::with('company')->where('id', $id)->first();
        return $result;
    }

}
