<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ContactsRequest;
use App\Http\Resources\ContactsResource;
use App\Models\Api\Contacts;
use App\Models\Api\People;

class ContactsController extends Controller
{
    protected $contacts;
    protected $person;

    public function __construct(Contacts $contacts, People $person)
    {
        $this->contacts = $contacts;
        $this->person = $person;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $contacts = Contacts::paginate();
        return ContactsResource::collection($contacts);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $contacts = Contacts::findOrFail($id);
        return new ContactsResource($contacts);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ContactsRequest $contactsRequest)
    {
        $data = $contactsRequest->validated();
        $contacts = Contacts::create($data);

        return new ContactsResource($contacts);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ContactsRequest $contactsRequest, string $id)
    {
        $contact = Contacts::findOrFail($id);
        $data = $contactsRequest->all();
        $contact->update($data);

        return new ContactsResource($contact);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return Contacts::findOrFail($id)->delete();
    }
}
