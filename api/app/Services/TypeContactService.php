<?php

namespace App\Services;

use App\Repositories\Interfaces\TypeContactRepositoryInterface;
use App\Repositories\TypeContactRepository;

class TypeContactService extends AbstractService
{
    public function __construct(TypeContactRepositoryInterface $typeContactRepositoryInterface)
    {
        parent::__construct($typeContactRepositoryInterface);
    }
}
