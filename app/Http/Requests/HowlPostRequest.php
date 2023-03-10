<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class HowlPostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'body'=> 'required|string|max:400|min:4'
        ];
    }
}
