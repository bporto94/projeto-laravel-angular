<?php

namespace Database\Seeders;

use App\Models\TypeContact;
use Illuminate\Database\Seeder;

class TypeContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        TypeContact::factory(3)->create();
    }

}
