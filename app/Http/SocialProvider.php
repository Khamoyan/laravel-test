<?php
/**
 * Created by PhpStorm.
 * User: armenuhi
 * Date: 30/04/18
 * Time: 01:23
 */

namespace App\Http;

use Illuminate\Database\Eloquent\Model;

class SocialProvider extends Model
{

    protected $fillable = [
        'provider_id',
        'provider'
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}