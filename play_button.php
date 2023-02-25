<?php

$test_id = "4jDhI4nE32u8meRN1aOu8u";

function generate_play_button($spotify_id)
{
    $result = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/' . $spotify_id . '?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>';
    //  loading="lazy"
    return $result;
}

?>
