<?php

namespace App\Services;

use App\Http\Requests\EmployeeRequest;
use App\Models\Employee;

class EmployeesService
{

    /**
     * Get all the employees for Api
     *
     */

    public function getAllEmployees()
    {
        $result = Employee::all();
        return $result;
    }

    /**
     * Get all the employees for web
     *
     */

    public function getAllEmployeesWeb()
    {
        $result = Employee::paginate(4);
        return $result;
    }

    /**
     * Store a new employee
     *
     */

    public function createEmployee($inputs)
    {
        $result = Employee::create($inputs);
        return $result;
    }

    /**
     * Update the specified employee
     *
     */

    public function updateEmployee($inputs, $id)
    {
        $result = Employee::where('id', $id)->update($inputs);
        return $result;
    }

    /**
     * Delete the specified employee
     *
     */

    public function deleteEmployee($id)
    {
        $result = Employee::where('id', $id)->delete();
        return $result;
    }

    /**
     * Show the specified employee
     *
     */

    public function getEmployeeById($id)
    {
        $result = Employee::with('company')->where('id', $id)->first();
        return $result;
    }

}
