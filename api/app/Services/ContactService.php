<?php

namespace App\Services;

use App\Repositories\ContactRepository;

class ContactService extends AbstractService
{
    public function __construct(ContactRepository $clientRepository)
    {
        parent::__construct($clientRepository);
    }
}
