<?php

namespace App\Http\Controllers;

use App\Services\AbstractService;
use Illuminate\Http\Request;
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
        return response($data);
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
