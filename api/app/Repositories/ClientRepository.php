<?php

namespace App\Repositories;

use App\Models\Api\Client;

class ClientRepository extends AbstractRepository
{
    public function __construct(Client $client)
    {
        parent::__construct($client);
    }

}
