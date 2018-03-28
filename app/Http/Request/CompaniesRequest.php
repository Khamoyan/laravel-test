<?php

namespace App\Http\Request;

use Illuminate\Http\Request;


class CompaniesRequest extends Request{
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




