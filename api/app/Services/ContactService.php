<?php

namespace App\Services;

use App\Models\Contact;
use App\Repositories\ContactRepository;
use App\Repositories\Interfaces\ContactRepositoryInterface;

class ContactService extends AbstractService
{
    private ContactRepository $contactRepository;

    public function __construct(ContactRepositoryInterface $contactRepositoryInterface, ContactRepository $contactRepository)
    {
        parent::__construct($contactRepositoryInterface);
        $this->contactRepository = $contactRepository;
    }

    public function getAllWithTypeClient()
    {
        return Contact::with('types', 'client')->get();
    }

    public function createContactWithClient($client, array $contactData)
    {
        $contactData['client_id'] = $client->id;
        return $this->contactRepository->create($contactData);
    }
}
