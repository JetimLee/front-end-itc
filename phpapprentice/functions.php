<?php

function hello_world()
{
    echo "Hello, World!\n";
}
hello_world();

function greet($firstname, $lastname)
{
    echo "Hello, $firstname $lastname\n";
}

greet("Gavin", "Coulson");

function capitalize($value)
{
    return mb_strtoupper($value);
}

$animal = capitalize('dog');
echo "$animal\n";

//closures in php
//sort of like a function expression or an arrow function as far as anononymity goes
$sum = function ($a, $b) {
    return $a + $b;
};
//executing a closure
echo $sum(1, 2) . "\n";
