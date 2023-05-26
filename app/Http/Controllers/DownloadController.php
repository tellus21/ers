<?php

namespace App\Http\Controllers;

define('DOWNLOAD_DIR','download/');  

use Illuminate\Http\Request;

class DownloadController extends Controller
{
    public function fax()
    {
        return response()->download(public_path(DOWNLOAD_DIR . "FAX.xlsx"));
    }

    public function medicalInformation()
    {
        return response()->download(public_path(DOWNLOAD_DIR . "診療情報提供書.xlsx"));
    }

    public function medicalQuestionnaire()
    {
        return response()->download(public_path(DOWNLOAD_DIR . "問診票.xlsx"));
    }
}