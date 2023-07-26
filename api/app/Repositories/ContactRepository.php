<?php

namespace App\Repositories;

use App\Models\Contact;
use App\Repositories\Interfaces\ContactRepositoryInterface;

class ContactRepository extends AbstractRepository implements ContactRepositoryInterface
{
    public function __construct(Contact $contact)
    {
        parent::__construct($contact);
    }
}
