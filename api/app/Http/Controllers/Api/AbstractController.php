<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\AbstractService;
use http\Client\Request;
use http\Client\Response;

abstract class AbstractController extends Controller
{
    protected $service;

    public function __construct(AbstractService $service)
    {
        $this->service = $service;
    }

    public function index()
    {
        $data = $this->service->all();
        return response()->json($data);
    }

    public function create()
    {
        return response(201);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            // Validation rules for the data.
        ]);

        $this->service->create($data);

        return response($data,201);
    }

    public function edit($id)
    {
        $record = $this->service->find($id);
        return view('edit', compact('record'));
    }

    public function update(Request $request, $id)
    {
        $data = $request->validate([
            // Validation rules for the data.
        ]);

        $this->service->update($id, $data);

        return redirect()->route('resource.index')->with('success', 'Record updated successfully.');
    }

    public function destroy($id)
    {
        $this->service->delete($id);

        return response($id,200);
    }
}
