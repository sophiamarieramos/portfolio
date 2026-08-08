<?php

use App\Http\Controllers\PortfolioController;
use Illuminate\Support\Facades\Route;

// Public routes
Route::get('/', [PortfolioController::class, 'index'])->name('portfolio.index');

// Admin routes (you can add auth middleware later)
Route::prefix('admin')->group(function () {
    Route::get('/portfolio', [PortfolioController::class, 'adminIndex'])->name('admin.portfolio');
    Route::post('/portfolio', [PortfolioController::class, 'storePortfolio'])->name('admin.portfolio.store');
    Route::post('/skills', [PortfolioController::class, 'storeSkill'])->name('admin.skills.store');
    Route::delete('/portfolio/{portfolio}', [PortfolioController::class, 'deletePortfolio'])->name('admin.portfolio.delete');
});