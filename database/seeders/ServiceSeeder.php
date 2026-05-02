<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\Service::create([
            'title' => 'Landing Page',
            'description' => 'A high-converting, modern landing page designed to capture leads and showcase your primary product or service with stunning visual aesthetics.',
            'image_path' => 'images/services/landing.png',
            'price_range' => 'Rp 1.500.000 - Rp 3.000.000'
        ]);

        \App\Models\Service::create([
            'title' => 'E-Commerce Website',
            'description' => 'A fully functional online store with product management, shopping cart, and secure payment gateway integrations, tailored for your business.',
            'image_path' => 'images/services/ecommerce.png',
            'price_range' => 'Rp 5.000.000 - Rp 10.000.000'
        ]);

        \App\Models\Service::create([
            'title' => 'Company Profile',
            'description' => 'A professional and elegant corporate website to establish your brand identity, complete with about us, services, and contact sections.',
            'image_path' => 'images/services/company.png',
            'price_range' => 'Rp 3.000.000 - Rp 6.000.000'
        ]);
    }
}
