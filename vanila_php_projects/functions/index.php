<?php

function sayHello()
{
    echo 'Hello Gavin';
}

sayHello();

function addAll(...$numbers)
{
    $total = 0;
    foreach ($numbers as $number) {
        $total += $number;
    }
    return $total;
}

echo addAll(1, 2, 3);

$mymame = 'Gavin';

function changeMyName($someName)
{
    $someName = 'Steve';
    echo $someName;
    //Generally shouldn't do stuff like this
    global $mymame;
    $mymame = 'Steven';
}
changeMyName($mymame);
echo $mymame;

$square = function ($myNumber) {
    return $myNumber * $myNumber;
};

$result = $square(5);
echo 'The square of 5 is ' . $result;

//closures in php
function createCounter()
{
    $count = 0;

    $counter = function () use (&$count) {
        return ++$count;
    };

    return $counter;
}

//meant to be a one liner cannot be extended

$add = fn ($a, $b) => $a + $b;

echo $add(1, 2);

function fahrenheitToCelsius($fahren)
{
    $celsiusTemp = ($fahren - 32) / 1.8;
    return number_format($celsiusTemp, 1);
}
$baseTemp = 32;
function harderFahrenheitToCelsius()
{
    global $baseTemp;
    $celsiusTemp = ($baseTemp - 32) / 1.8;
    return $celsiusTemp;
}

$convertArrowFahrenToCelsius = fn ($a) => number_format(($a - 32) / 1.8, 1);

function convertWithClosure()
{
    global $baseTemp;

    $conversion = function () use (&$baseTemp) {
        return number_format(($baseTemp - 32) / 1.8, 1);
    };

    return $conversion;
}

$anotherClosureConvert = function ($f) use ($baseTemp) {
    return ($f - $baseTemp) * 5 / 9;
};

$closure = convertWithClosure();
$convertedTemp = $closure();



$tempToPlayWith = 70;

echo '<br>' . $tempToPlayWith . 'F = ' . fahrenheitToCelsius($tempToPlayWith);
echo '<br>' . $baseTemp . 'F = ' . harderFahrenheitToCelsius();
echo '<br>' . $baseTemp . 'F = ' . $convertArrowFahrenToCelsius($baseTemp);
echo '<br>' . $baseTemp . 'F = ' . $convertedTemp;
echo '<br>' . 68 . 'F = ' . $anotherClosureConvert(68);


function printNamesToUpperCase(array $listOfNames)
{
    foreach ($listOfNames as $name) {
        echo '<br>' . strtoupper($name);
    }
}

printNamesToUpperCase(['gavin', 'sean', 'michael']);

$mySentence = "The quick brown fox jumped over the lazy dog";

function findLongestWord(string $sentence)
{
    $length = 0;
    $curWord = '';

    $wordArray = explode(" ", $sentence);

    foreach ($wordArray as $word) {
        $wordLength = strlen(trim($word));

        if ($wordLength > $length) {
            $length = $wordLength;
            $curWord = $word;
        }
    }
    return $curWord;
}

echo findLongestWord($mySentence);
