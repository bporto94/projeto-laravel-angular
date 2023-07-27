<?php

namespace App\Http\Controllers;

use App\Http\Resources\ClientResource;
use App\Services\ClientService;
use App\Services\ContactService;
use Illuminate\Http\Request;

class ClientController extends AbstractController
{
    protected ClientService $clientService;
    protected ContactService $contactService;

    public function __construct(ClientService $clientService, ContactService $contactService)
    {
        $this->clientService = $clientService;
        $this->contactService = $contactService;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->clientService->getAllWithContacts();
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return $this->clientService->find($id);
    }

    /**
     * @param Request $request
     * @return object
     */
    public function store(Request $request): ClientResource
    {
        $clientData = $request->all('name', 'age');
        $contactData = $request->input('contacts');
        $client = $this->clientService->createClientWithContacts($clientData, $contactData);
        return new ClientResource($client);
    }

    /**
     * @param Request $request
     * @param $id
     * @return false
     */
    public function update(Request $request, $id)
    {
        return $this->clientService->update($id, $request->all());
    }

    /**
     * @param $id
     * @return mixed
     */
    public function destroy($id): mixed
    {
        return $this->clientService->delete($id);
    }
}
