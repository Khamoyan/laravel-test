<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Employees;

class Employees extends Model
{
    //
    protected $table='employees';

    protected $fillable=[
    	'first_name',
    	'last_name',
    	'company_id',
    	'email',
    	'phone'
    ];

    public function company()
    {
    	$this->belongsTo('App\Employees');
    }
    
}
