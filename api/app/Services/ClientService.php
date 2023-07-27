<?php

namespace App\Services;

use App\Models\Client;
use App\Repositories\ClientRepository;
use App\Repositories\Interfaces\ClientRepositoryInterface;

class ClientService extends AbstractService
{
    private ClientRepository $clientRepository;
    private $contactService;

    public function __construct(ClientRepositoryInterface $clientRepositoryInterface, ContactService $contactService, ClientRepository $clientRepository)
    {
        parent::__construct($clientRepositoryInterface);

        $this->contactService = $contactService;
        $this->clientRepository = $clientRepository;
    }

    public function getAllWithContacts()
    {
        return Client::with('contacts', 'contacts.types')->get();
    }

    public function createClientWithContacts(array $clientData, array $contactsData)
    {
        $data = $this->clientRepository->create($clientData);

        foreach ($contactsData as $contactData) {
            $this->contactService->createContactWithClient($data, $contactData);
        }
        return $data;
    }

}
