<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Service;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class ServiceController extends Controller
{
    public function index()
    {
        $services = Service::latest()->get();
        return Inertia::render('Admin/Services/Index', compact('services'));
    }

    public function create()
    {
        return Inertia::render('Admin/Services/Form');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'price_range' => 'nullable|string|max:255',
            'image' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('services', 'public');
            $validated['image_path'] = 'storage/' . $path;
        }

        Service::create($validated);

        return redirect()->route('services.index')->with('success', 'Layanan berhasil ditambahkan.');
    }

    public function edit(Service $service)
    {
        return Inertia::render('Admin/Services/Form', compact('service'));
    }

    public function update(Request $request, Service $service)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'price_range' => 'nullable|string|max:255',
            'image' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('image')) {
            if ($service->image_path && Storage::disk('public')->exists(str_replace('storage/', '', $service->image_path))) {
                Storage::disk('public')->delete(str_replace('storage/', '', $service->image_path));
            }
            $path = $request->file('image')->store('services', 'public');
            $validated['image_path'] = 'storage/' . $path;
        }

        $service->update($validated);

        return redirect()->route('services.index')->with('success', 'Layanan berhasil diupdate.');
    }

    public function destroy(Service $service)
    {
        if ($service->image_path && Storage::disk('public')->exists(str_replace('storage/', '', $service->image_path))) {
            Storage::disk('public')->delete(str_replace('storage/', '', $service->image_path));
        }
        $service->delete();

        return redirect()->route('services.index')->with('success', 'Layanan berhasil dihapus.');
    }
}
