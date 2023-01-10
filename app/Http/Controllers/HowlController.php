<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\HowlPostRequest;
use Inertia\Inertia;
use App\Models\Howl;

class HowlController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $howls = Howl::with('user:id,name')->latest()->get();
        return Inertia::render('Welcome', ["howls" => $howls]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\request\HowlPostRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(HowlPostRequest $request)
    {
        $howl = new Howl();
        $howl->user_id = $request->user()->id;
        $howl->body = $request->body;

        $howl->save();
        return redirect(route("howl.index"));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $howl = Howl::findOrFail($id);
        if (str($howl->user_id) != str(auth()->user()->id)) {
            return redirect("/");
        }
        return Inertia::render("Howl/Edit", ['howl' => $howl]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\request\HowlPostRequest $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(HowlPostRequest $request, $id)
    {
        $howl = Howl::findOrFail($id);
        if (str($howl->user_id) != str(auth()->user()->id)) {
            return redirect("/");
        }
        $howl->body = $request->body;
        $howl->save();
        return redirect(route("howl.dashboard"));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Howl::destroy($id);
        return redirect(route("howl.dashboard"));
    }

    public function dashboard()
    {
        $howls = Howl::where("user_id", auth()->user()->id)->with('user:id,name')->latest()->get();
        return Inertia::render("Dashboard", ['userHowls' => $howls]);
    }
}
