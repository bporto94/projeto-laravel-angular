<?php

namespace App\Http\Controllers;

use App\Http\Resources\TypeContactResource;
use App\Services\TypeContactService;
use Illuminate\Http\Request;

class TypeContactController extends AbstractController
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
        return $this->typeContactService->all();
    }

    /**
     * @param Request $request
     * @return object
     */
    public function store(Request $request)
    {
        $request = $this->typeContactService->create($request->all());
        return new TypeContactResource($request);
    }

    /**
     * @param Request $request
     * @param $id
     * @return false
     */
    public function update(Request $request, $id)
    {
        return $this->typeContactService->update($id, $request->all());
    }

    public function destroy($id)
    {
        return $this->typeContactService->delete($id);
    }
}
