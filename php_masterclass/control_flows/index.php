<?php

for ($i = 1; $i <= 10; $i++) {
    echo $i;
}


$array = [];

for ($i = 1; $i <= 10; $i++) {

    // Put your code here
    if ($i < 4) {
        array_push($array, "a");
    } else if ($i >= 4 && $i <= 7) {
        array_push($array, "b");
    } else {
        array_push($array, "c");
    }
}
