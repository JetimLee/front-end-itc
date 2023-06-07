<?php

// $hello = "hello";

// var_dump($hello);

$array = ["whatever", "you", "third"];

foreach ($array as $index => $value) {
    echo "{$index} = {$value}.";
}
$basic_array = ["something", "another thing", "one more thing"];

foreach ($basic_array as $index => $value) {
    echo $index . " - " . $value .  ", ";
}

$articles = [
    "two" => "first post!",
    "four" => "second post!",
    "six" => "third post!"
];
foreach ($articles as $key => $value) {
    echo "\n" . $key . "\n" . $value;
}

$people = [
    [
        "name" => "Alice",
        "email" => "alice@example.com",
        "height" => 1.80
    ],
    [
        "name" => "Bob",
        "email" => "bob@example.com",
        "height" => 1.67
    ],
    [
        "name" => "Alice",
        "email" => "alice@example.com",
        "height" => 1.74
    ]
];

//going through a multidimensional array
foreach ($people as $key => $value) {
    foreach ($value as $secondary_array => $secondary_array_value) {
        echo  nl2br("\n\n{$secondary_array}:{$secondary_array_value}");
    }
}


$other_articles = [];

if (empty($other_articles)) {
    echo "The other articles array is empty";
} else {
    echo "The other articles array is not empty";
}
