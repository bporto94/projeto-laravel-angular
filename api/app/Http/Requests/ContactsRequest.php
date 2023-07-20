<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContactsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        $rules = [
            'description' => 'required|min:5|max:50, unique:people',
            'type_id' => 'required',
            'person_id' => 'required'
        ];

        if ($this->method() === 'PUT'){
            $rules['description'] = ['nullable','min:5','max:50', "unique:contacts,description,{$this->id},id"];
            $rules['types_id'] = ['nullable'];
            $rules['person_id'] = ['nullable'];
        }

        return $rules;
    }
}
