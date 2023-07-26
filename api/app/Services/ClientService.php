<?php

namespace App\Services;

use App\Repositories\ClientRepository;

class ClientService extends AbstractService
{
    public function __construct(ClientRepository $clientRepository)
    {
        parent::__construct($clientRepository);
    }
}
