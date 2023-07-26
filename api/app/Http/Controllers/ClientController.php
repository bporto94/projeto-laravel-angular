<?php

namespace App\Http\Controllers;

use App\Http\Requests\ClientRequest;
use App\Http\Resources\ClientResource;
use App\Services\ClientService;
use Illuminate\Http\Request;

class ClientController extends AbstractController
{
    protected ClientService $clientService;

    public function __construct(ClientService $clientService)
    {
        $this->clientService = $clientService;
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
        $request = $this->clientService->create($request->all());
        return new ClientResource($request);
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
