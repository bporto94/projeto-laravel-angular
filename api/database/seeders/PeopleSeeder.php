<?php

namespace Database\Seeders;

use App\Models\Api\Types;
use Illuminate\Database\Seeder;

class PeopleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\Api\People::factory(10)->create();
    }

}
