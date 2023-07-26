<?php

namespace App\Repositories;

use App\Models\TypeContact;
use App\Repositories\Interfaces\TypeContactRepositoryInterface;

class TypeContactRepository extends AbstractRepository implements TypeContactRepositoryInterface
{
    public function __construct(TypeContact $typeContact)
    {
        parent::__construct($typeContact);
    }
}
