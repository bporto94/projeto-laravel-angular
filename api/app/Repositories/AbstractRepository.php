<?php

namespace App\Repositories;

use Illuminate\Database\Eloquent\Model;

class AbstractRepository
{
    protected $model;

    public function __construct(Model $model)
    {
        $this->model = $model;
    }

    public function all()
    {
        return $this->model->all();
    }

    public function find($id)
    {
        return $this->model->find($id);
    }

    public function create(array $data)
    {
        return $this->model->create($data);
    }

    public function update($id, array $data)
    {
        $record = $this->find($id);
        return $record ? $record->update($data) : false;
    }

    public function delete($id)
    {
        return $this->model->findOrFail($id)->delete();
    }
}
