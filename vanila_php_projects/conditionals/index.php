<!-- ## Instructions

1. Take the array of names below and loop through them. The type of loop is up to you.
2. Within the loop, use a conditional statement to check if the first letter of the name is 'A'.
3. If the first letter is 'A', skip that name and continue to the next iteration.
4. If the first letter is not 'A', reverse the string.
5. Make all names lowercase before printing them.

### Hints

- You can use indexes to access the first character of a string. ($string[0]) or you can use the `substr()` function.
- You can reverse a string using the `strrev()` function.
- You can make a string lowercase using the `strtolower()` function.
- You can skip an iteration of a loop using the `continue` keyword. -->

<?php
for ($i = 1; $i <= 100; $i++) {
    if ($i % 3 == 0 && $i % 5 == 0) {
        echo "FizzBuzz" . '<br>';
    } else if ($i % 3 == 0) {
        echo "Fizz" . '<br>';
    } else if ($i % 5 == 0) {
        echo "Buzz" . '<br>';
    } else {
        echo $i . '<br>';
    }
}

$names = ['Alex', 'Beth', 'Caroline', 'Dave', 'Elanor', 'Anna', 'Freddie', 'Adam'];


foreach ($names as $name) {
    if ($name[0] == 'A') {
        continue;
    }
    $reversed_name_lower_cased = strtolower(strrev($name));
    echo $reversed_name_lower_cased . "<br>";
}
