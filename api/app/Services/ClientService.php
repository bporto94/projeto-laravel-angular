<?php

namespace App\Services;

use App\Repositories\ClientRepository;
use App\Repositories\Interfaces\ClientRepositoryInterface;

class ClientService extends AbstractService
{
    public function __construct(ClientRepositoryInterface $clientRepositoryInterface)
    {
        parent::__construct($clientRepositoryInterface);
    }
}
