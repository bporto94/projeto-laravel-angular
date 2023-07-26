<?php

namespace Database\Seeders;

use App\Models\Api\Contact;
use Illuminate\Database\Seeder;

class ContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Contact::factory(25)->create();
    }

}
