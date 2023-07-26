<?php

namespace App\Providers;

use App\Repositories\ClientRepository;
use App\Repositories\ContactRepository;
use App\Repositories\Interfaces\ClientRepositoryInterface;
use App\Repositories\Interfaces\ContactRepositoryInterface;
use App\Repositories\Interfaces\TypeContactRepositoryInterface;
use App\Repositories\TypeContactRepository;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(ClientRepositoryInterface::class,ClientRepository::class);
        $this->app->bind(ContactRepositoryInterface::class,ContactRepository::class);
        $this->app->bind(TypeContactRepositoryInterface::class,TypeContactRepository::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
