<?php

namespace Database\Seeders;

use App\Models\Api\Types;
use Illuminate\Database\Seeder;

class ContactsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\Api\Contacts::factory(25)->create();
    }

}
