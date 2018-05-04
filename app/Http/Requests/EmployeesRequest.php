<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Auth;

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
            'phone' => 'required | integer'
        ];
    }
    
    public function inputs(FormRequest $request){
        $result = $request->all();

        $company = $this->companies->where('name', $result['company'])->first();
        if (!empty($company)) {
            $result['company_id'] = $company['id'];
            unset($result['_token'], $result['company'], $result['_method']);
            return $result;
        } else {
            $result['company_id'] = 0;
            unset($result['_token'], $result['company'], $result['_method']);
            return $result;
        }
    }
}
