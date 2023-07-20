<?php

namespace App\Models\Api;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contacts extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'contacts';

    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'id';

    protected $relations = ['types'];

    protected $with = ['types'];

    protected $hidden = ['timestamps'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'description',
        'person_id',
        'type_id',
    ];


    public function types()
    {
        return $this->hasOne(Types::class, 'id', 'type_id');
    }

    public function person()
    {
        return $this->belongsTo(People::class, 'person_id', 'id');
    }

}
