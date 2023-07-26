<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\TypesResource;
use App\Models\Api\Type;
use App\Models\Api\TypeContact;
use App\Services\ClientService;
use App\Services\TypeContactService;
use Illuminate\Http\Request;

class TypeContactController extends Controller
{
    protected $typeContactService;

    public function __construct(TypeContactService $typeContactService)
    {
        $this->typeContactService = $typeContactService;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $clients = $this->service->all();
        return $clients;
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $client = $this->service->find($id);
        return $client;
    }

    public function create()
    {
        return parent::create(); // TODO: Change the autogenerated stub
    }

    public function destroy($id)
    {
        $client = $this->service->delete($id);
        return $client;
    }
}
