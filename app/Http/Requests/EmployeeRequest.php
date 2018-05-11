<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EmployeeRequest extends FormRequest
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
            'email' => 'required|email',
        ];
    }

    public function inputs()
    {
        $result = $this->only('id', 'first_name', 'last_name', 'email', 'phone', 'company_id');
        return $result;
    }

}
