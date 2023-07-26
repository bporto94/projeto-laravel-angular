<?php

namespace App\Services;

use App\Models\Client;
use App\Models\Contact;
use App\Repositories\ClientRepository;
use App\Repositories\Interfaces\ClientRepositoryInterface;

class ClientService extends AbstractService
{
    public function __construct(ClientRepositoryInterface $clientRepositoryInterface)
    {
        parent::__construct($clientRepositoryInterface);
    }

    public function getAllWithContacts()
    {
        return Client::with('contacts','contacts.types')->get();
    }
}
