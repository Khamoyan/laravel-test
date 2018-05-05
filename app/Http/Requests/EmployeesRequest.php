<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EmployeesRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'first_name' => 'required | string',
            'last_name' => 'required | string',
//            'phone' => 'required | integer',
            'email' => 'required|email',
        ];
    }

    public function inputs()
    {
        return $this->all();
    }

}