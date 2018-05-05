<?php
/**
 * Created by PhpStorm.
 * User: armenuhi
 * Date: 05/05/18
 * Time: 13:37
 */

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
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

        ];
    }

    public function inputs()
    {
        return $this->all();
    }

}