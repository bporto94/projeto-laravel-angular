<?php

namespace App\Repositories;

use App\Models\Api\Contact;

class ContactRepository extends AbstractRepository
{
    public function __construct(Contact $contact)
    {
        parent::__construct($contact);
    }
}
