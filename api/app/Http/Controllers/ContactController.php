<?php

namespace App\Http\Controllers;

use App\Http\Resources\ClientResource;
use App\Http\Resources\ContactResource;
use App\Services\ContactService;
use Illuminate\Http\Request;

class ContactController extends AbstractController
{
    protected $contactService;

    public function __construct(ContactService $contactService)
    {
        $this->contactService = $contactService;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->contactService->getAllWithTypeClient();
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return $this->contactService->find($id);
    }
    /**
     * @param Request $request
     * @return object
     */
    public function store(Request $request)
    {
        $request = $this->contactService->create($request->all());
        return new ContactResource($request);
    }

    /**
     * @param Request $request
     * @param $id
     * @return false
     */
    public function update(Request $request, $id)
    {
        return $this->contactService->update($id, $request->all());
    }

    public function destroy($id)
    {
        return $this->contactService->delete($id);
    }
}
