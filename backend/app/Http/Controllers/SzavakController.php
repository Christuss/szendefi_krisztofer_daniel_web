<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SzavakController extends Controller
{
    public function szavak() {
        return DB::table("szavaks")->get();
    }

    public function szavakTemaAlapjan($tema) {
        return DB::table("szavaks as s")
        ->join("temas as t","s.temaId","=","t.id")
        ->where("t.temanev", "=", $tema)
        ->get();
    }
}
