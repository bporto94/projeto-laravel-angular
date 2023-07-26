<?php

namespace App\Repositories;

use App\Models\Api\TypeContact;

class TypeContactRepository extends AbstractRepository
{
    public function __construct(TypeContact $typeContact)
    {
        parent::__construct($typeContact);
    }
}
