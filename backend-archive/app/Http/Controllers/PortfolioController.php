<?php

namespace App\Http\Controllers;

use App\Models\Portfolio;
use App\Models\Skill;
use Illuminate\Http\Request;

class PortfolioController extends Controller
{
    public function index()
    {
        $portfolios = Portfolio::where('is_active', true)
            ->orderBy('order')
            ->get();
        $skills = Skill::orderBy('order')->get();
        
        return view('portfolio.index', compact('portfolios', 'skills'));
    }

    // Admin methods for managing portfolio
    public function adminIndex()
    {
        $portfolios = Portfolio::orderBy('order')->get();
        $skills = Skill::orderBy('order')->get();
        return view('portfolio.admin', compact('portfolios', 'skills'));
    }

    public function storePortfolio(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'description' => 'required|string',
            'technologies' => 'nullable|string',
            'project_url' => 'nullable|url',
            'order' => 'integer',
        ]);

        Portfolio::create($validated);
        return redirect()->back()->with('success', 'Project added successfully!');
    }

    public function storeSkill(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'category' => 'required|string',
            'percentage' => 'integer|min:0|max:100',
        ]);

        Skill::create($validated);
        return redirect()->back()->with('success', 'Skill added successfully!');
    }

    public function deletePortfolio(Portfolio $portfolio)
    {
        $portfolio->delete();
        return redirect()->back()->with('success', 'Project deleted!');
    }
}
