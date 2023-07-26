<?php

namespace App\Http\Controllers;

use App\Http\Resources\ClientResource;
use App\Http\Resources\ContactResource;
use App\Services\ContactService;
use Illuminate\Http\Request;

class ContactController extends AbstractController
{
    protected $service;

    public function __construct(ContactService $contactService)
    {
        $this->service = $contactService;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->service->all();
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return $this->service->find($id);
    }
    /**
     * @param Request $request
     * @return object
     */
    public function store(Request $request)
    {
        $request = $this->service->create($request->all());
        return new ContactResource($request);
    }

    /**
     * @param Request $request
     * @param $id
     * @return false
     */
    public function update(Request $request, $id)
    {
        return $this->service->update($id, $request->all());
    }

    public function destroy($id)
    {
        return $this->service->delete($id);
    }
}
