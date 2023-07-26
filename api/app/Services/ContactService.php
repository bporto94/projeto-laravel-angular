<?php

namespace App\Services;

use App\Repositories\ContactRepository;
use App\Repositories\Interfaces\ContactRepositoryInterface;

class ContactService extends AbstractService
{
    public function __construct(ContactRepositoryInterface $clientRepositoryInterface)
    {
        parent::__construct($clientRepositoryInterface);
    }
}
