<?php

namespace App\Services;

use App\Models\Contact;
use App\Repositories\ContactRepository;
use App\Repositories\Interfaces\ContactRepositoryInterface;

class ContactService extends AbstractService
{
    public function __construct(ContactRepositoryInterface $contactRepositoryInterface)
    {
        parent::__construct($contactRepositoryInterface);
    }

    public function getAllWithTypeClient()
    {
        return Contact::with('types','client')->get();
    }
}
