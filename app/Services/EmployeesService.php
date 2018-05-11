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
    
    public function index()
    {
         $result = Employee::all();
         return $result;
    }

     /**
     * Get all the employees for web
     *
     */

    public function indexWeb()
    {
        $result = Employee::paginate(4);
        return $result;
    }

    /**
     * Store a new employee
     *
     */

    public function store($inputs)
    {
        $result = Employee::create($inputs);
        return $result;
    }

    /**
     * Update the specified employee
     *
     */

    public function update($inputs, $id)
    {
       $result = Employee::where('id', $id)->update($inputs);
       return $result;
    }

    /**
     * Delete the specified employee
     *
     */

    public function destroy($id)
    {
        $result = Employee::where('id', $id)->delete();
        return $result;
    }

    /**
     * Show the specified employee
     *
     */

    public function show($id)
    {
        $result = Employee::with('company')->where('id',$id)->first();  
        return $result; 
    }

}
