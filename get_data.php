<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$VOLUME = $_GET['volume'];
$CD = $_GET['cd'];

$INDEX_TRACKNAME = 1;
$INDEX_ARTIST = 2;
$INDEX_YEAR = 4;
$INDEX_DISCOGS_URL = 5;
$INDEX_CD = 6;
$INDEX_TRACK_ID = 7;
$INDEX_VOLUME = 8;

//echo "get data<br><br>";

$tracks = array();

if (($f = fopen("res/tracks.csv", "r")) !== FALSE)
{
    while (($data = fgetcsv($f, 1000, ",")) !== FALSE)
    {
        $num = count($data);

        if ($data[$INDEX_VOLUME] == $VOLUME && $data[$INDEX_CD] == $CD)
        {
            array_push($tracks, $data);
        }
    }
    //$num_lines = count($data);

    fclose($f);
} 
else
{
    echo "could not open file";
}

?>
