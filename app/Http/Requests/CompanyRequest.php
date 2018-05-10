<?php
/**
 * Created by PhpStorm.
 * User: armenuhi
 * Date: 05/05/18
 * Time: 01:19
 */

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CompanyRequest extends FormRequest
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
            'name' => 'required|string',
            'logo' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048|dimensions:min_width=100,min_height=100',
            'email' => 'required|email',
        ];
    }

    public function inputs()
    {
        return $this->all();
    }
}
