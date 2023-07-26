<?php

namespace App\Services;

use App\Repositories\TypeContactRepository;

class TypeContactService extends AbstractService
{
    public function __construct(TypeContactRepository $typeContactRepository)
    {
        parent::__construct($typeContactRepository);
    }
}
