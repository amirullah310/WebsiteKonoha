<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
        'services' => \App\Models\Service::all()
    ]);
});

Route::get('/member/{id}', function ($id) {
    return Inertia::render('Portfolio', [
        'memberId' => $id
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    
    // Admin Services
    Route::resource('admin/services', \App\Http\Controllers\ServiceController::class)->except(['show']);
});

require __DIR__.'/auth.php';
