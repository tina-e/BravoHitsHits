<?php

require("play_button.php");
include("get_data.php");

?>

<html>

<head>
  <title>Bravo Hits Hits</title>
  <link rel="stylesheet" href="css/style.css">
  <!-- Add favicon ico -->
  <!--<link rel="icon" href="img/favicon.ico" type="image/x-icon" />-->
</head>

<body>
<table class="track-list">

<?php

$counter = 1;

foreach($tracks as $track)
{
    echo "<tr class=\"track-row\">";
    echo "<td class=\"index-cell\">";
    echo $counter;
    echo "</td>";
    echo "<td class=\"artist-cell\">";
    echo $track[$INDEX_ARTIST];
    echo "</td>";
    echo "<td class=\"track-cell\">";
    echo $track[$INDEX_TRACKNAME];
    echo "</td>";
    echo "<td class=\"player-cell\">";
    //echo "<div style=\"visibility: hidden\">";
    echo generate_play_button($test_id);
    //echo "</div>";
    echo "</td>";
    echo "</tr>";
    $counter++;
}

//var_dump($tracks)
?>

</table>

</body>
