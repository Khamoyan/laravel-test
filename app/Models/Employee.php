<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Company;

class Employee extends Model
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
    	return $this->belongsTo(Company::class);
    }
    
}
