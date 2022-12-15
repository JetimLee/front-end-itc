<?php

$taskList = array('grocery store', 'change car oil');

//best way to do it
$groceryList = ['bread', 'milk', 'eggs'];


foreach ($taskList as $value) {
    echo "$value\n";
}
for ($i = 0; $i < sizeof($taskList); $i++) {
    echo "$taskList[$i]\n";
}

//array with string keys, this is called an associative array or a map
$car = ['make' => 'Toyota', 'model' => 'Camry'];
echo $car['model'] . "\n";
//looping over map/associative array
foreach ($car as $key => $value) {
    echo "$key\n";
}

$keys = array_keys($car);
foreach ($keys as $key) {
    echo "$key\n";
    echo "$car[$key]\n";
}


$keys = array_keys($car);

for ($i = 0; $i < count($keys); ++$i) {
    echo $keys[$i] . ' ' . $car[$keys[$i]] . "\n";
}
