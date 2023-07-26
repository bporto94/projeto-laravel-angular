<?php

namespace Database\Factories;

use App\Models\Api\Type;
use App\Models\Contact;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Contact>
 */
class ContactFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Contact::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'description' =>  fake()->phoneNumber(),
            'type_id' => $this->faker->randomElement([1,2,3]),
            'client_id' => $this->faker->randomElement([1,2,3,4,5,6,7,8,9,10]),
        ];
    }

}
