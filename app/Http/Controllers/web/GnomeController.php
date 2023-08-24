<?php

namespace App\Http\Controllers\web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Auth;
use Validator;
use helper;
use Illuminate\Support\Facades\Crypt;


class GnomeController extends Controller
{
    function index(Request $request){
        return view('main.gnome');
    }
}