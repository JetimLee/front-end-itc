<?php
$animal = "cow";
if ($animal == "cow") {
    echo "Moooo...\n";
};

$animal = "bird";
if ($animal = "dog") {
    echo "Woof! 🐶\n";
} elseif ($animal == "cat") {
    echo "Meow!? 🐱\n";
} elseif ($animal == 'bird') {
    echo "Chirp! 🐦\n";
} else {
    echo "I am not a dog, cat or bird\n";
}

$food = 'apples';
switch ($food) {
    case 'apples':
        echo "Eating an apple\n";
        break;
    case 'oranges':
        echo "Eating an orange\n";
        break;
    case 'peaches':
        echo "Eating a peach\n";
        break;
    default:
        echo "No food, I am hungry\n";
}

$language = 'english';
echo $language == 'spanish' ? "hola\n" : "hello\n";

echo $IDoNotExist ?? "Variable not set\n";

$IExist = "Variable exists\n";
echo $IDoNotExist ?? $IExist ?? "Neither variable is set\n";
