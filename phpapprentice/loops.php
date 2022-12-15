<?php

$num = 5;
while ($num > 0) {
    echo "While loop $num\n";
    --$num;
}

$num = 0;
do {
    echo "Do while $num\n";
    ++$num;
} while ($num < 0);

for ($i = 0; $i < 10; $i++) {
    echo "For loop $i\n";
}

$set = [1, 2, 3, 4, 5];
foreach ($set as $num) {
    echo "Array value $num\n";
}

$values = ['one', 'two', 'three'];
foreach ($values as $value) {
    if ($value === 'three') {
        break;
    }
    echo "Break $value\n";
}

$values = ['one', 'skip', 'three'];
foreach ($values as $value) {
    if ($value === 'one') {
        continue;
    }
    echo "Continue $value\n";
}
