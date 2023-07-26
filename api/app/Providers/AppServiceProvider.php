<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind('App\Repositories\ClientRepository', 'App\Services\ClientService');
        $this->app->bind('App\Repositories\ContactRepository', 'App\Services\ContactService');
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
