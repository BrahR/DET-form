<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GeneralText extends Model
{
    use HasFactory;
        
    protected $fillable = [
        'text_type',
        'min',
        'max',
        'format',
        'error_message',
        'placeholder',
    ];
}
