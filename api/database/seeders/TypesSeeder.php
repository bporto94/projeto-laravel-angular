<?php

namespace Database\Seeders;

use App\Models\Api\Types;
use Illuminate\Database\Seeder;

class TypesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\Api\Types::factory(3)->create();
    }

}
