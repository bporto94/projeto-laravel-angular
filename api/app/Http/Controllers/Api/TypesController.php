<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\TypesResource;
use App\Models\Api\Types;
use Illuminate\Http\Request;

class TypesController extends Controller
{
    public function __construct(Types $types)
    {
        $this->model = $types;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $contacts = Types::paginate();
        return TypesResource::collection($contacts);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $contacts = Types::findOrFail($id);
        return new TypesResource($contacts);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $type = Types::create($data);

        return new TypesResource($type);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $type = Types::findOrFail($id);
        $data = $request->all();
        $type->update($data);

        return new TypesResource($type);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return Types::findOrFail($id)->delete();

    }
}
