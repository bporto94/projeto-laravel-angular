<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\PeopleRequest;
use App\Http\Resources\PeopleResource;
use App\Models\Api\Contacts;
use App\Models\Api\People;

class PeopleController extends Controller
{
    protected $contacts;
    protected $people;

    public function __construct(People $people, Contacts $contacts)
    {
        $this->model = $people;
        $this->model = $contacts;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $people = People::paginate();
        return PeopleResource::collection($people);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $people = People::where('id', $id)->first();
        return new PeopleResource($people);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(PeopleRequest $peopleRequest)
    {
        $data = $peopleRequest->validated();
        $people = People::create($data);

        return new PeopleResource($people);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(PeopleRequest $peopleRequest, string $id)
    {
        $person = People::findOrFail($id);
        $data = $peopleRequest->all();
        $person->update($data);

        return new PeopleResource($person);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return People::findOrFail($id)->delete();

    }
}
