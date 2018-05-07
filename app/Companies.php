<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Companies;

class Companies extends Model
{
    //
    protected $table='companies';

    protected $fillable=[
    	'name',
    	'email',
    	'logo',
    	'website',
    ];

     public function employees()
     {
    	$this->hasMany('App\Companies');
     }
}
