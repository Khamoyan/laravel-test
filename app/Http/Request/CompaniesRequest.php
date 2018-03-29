<?php

namespace App\Http\Request;

use Illuminate\Http\Request;


class CompaniesRequest extends Request{
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
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
            'title' => 'required|max:255',
            'text' => 'required|max:255',
            'category_id' => 'required',
        ];
    }
    public function  inputs()
    {   
        $inputs = $this->except(['_token', '_method']);
        $inputs['user_id'] = Auth::id();
        
        if($this->hasFile('image_path')) {   
            $image = $this->file('image_path');
            $inputs['image_path'] = time().'.'.$image->getClientOriginalExtension();
            $image->move(public_path('/images'), $inputs['image_path']);
        } else {
            $inputs['image_path'] = 'empty.jpg';
        }
        return $inputs;
    }
}

    
    public function resours(Request $request)
    {
        $this->validate($request, [

                'logo' => 'required',
                'logo' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048'

        ]);
        if($request->hasfile('logo'))
         {
            $image=$request->file('logo');
            $input['logo'] = time().'.'.$image->getClientOriginalExtension();
            $destinationPath = storage_path('app/public/logos');
            $image->move($destinationPath, $input['logo']);
         }
        $result=$request->all();
        unset($result['_token']);
        $id=$result['id'];
        return $result;
    }


    }




