<?php

namespace Database\Factories\Api;

use App\Models\Api\TypeContact;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Api\TypeContact>
 */
class TypeContactFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = TypeContact::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'description' => $this->faker->unique()->randomElement(['E-mail','Celular', 'Telefone'])
        ];
    }

}
