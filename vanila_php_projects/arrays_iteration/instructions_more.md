# Array & Loop Challenges

## Challenge 1: Multiplication Table

Create a multiplication table using a nested `for` loop. The table should look like this:

```
1 x 1 = 1
1 x 2 = 2
1 x 3 = 3
1 x 4 = 4
1 x 5 = 5
1 x 6 = 6
1 x 7 = 7
1 x 8 = 8
1 x 9 = 9
1 x 10 = 10
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
...
10 x 10 = 100
```

### Hints

- The outer and inner loops should both start at 1, not 0.
- The outer and inner loop should have a different variable name. (Commonly `$i` and `$j` are used.)
- Multiply the current number from the outer loop ($i) by the current number from the inner loop ($j). Then you want to echo the equation and the result.
- Add a line break after each equation.

<details>
  <summary>Click For Solution</summary>

```php
  for($i = 1; $i <=10; $i++) {
    for($j = 1; $j <= 10; $j++) {
      echo $i . ' x ' . $j . ' = ' . $i * $j . '<br>';
    }
  }
```

</details>

## Challenge 2: Get The Sum Of An Array

In the last challenge video, I had you get the sum of an array by manually adding the numbers together. In this challenge, I want you to use a `foreach` loop. You can also do this with a `for` loop for extra credit.

### Hints

- Use the append assignment operator (+=) to add each number to a variable. Then echo the variable after the loop.

<details>
  <summary>Click For Solution</summary>

```php
$numbers = [1, 2, 3, 4, 5];

$sum = 0;

foreach($numbers as $number) {
  $sum += $number;
}

echo $sum;

echo '<br>';

// Using a for loop
$sum2 = 0;

for($i = 0; $i < count($numbers); $i++) {
  $sum2 += $numbers[$i];
}

echo $sum2;
```

</details>

## Challenge 3: Student Average Grade

1. Create a multidimensional array called $students that contains associative arrays for each student.
2. Each student's associative array should have keys for 'name' and 'grades'.
3. The 'grades' key should have an array of numeric grades for that student.
4. Use a foreach loop to iterate over each student in the $students array.
5. Calculate the average grade for each student and display their name and average grade.

### Hints

- You can use the `array_sum()` function to get the sum of an array and the `count()` function to get the number of items in an array. Then divide the sum by the count to get the average.

<details>
  <summary>Click For Solution</summary>

```php

// 1. Create an array of students with their names and grades
$students = [
[
    'name' => 'John',
    'grades' => [85, 90, 92, 88]
],
[
    'name' => 'Jane',
    'grades' => [95, 88, 91, 87]
],
[
    'name' => 'Joe',
    'grades' => [75, 82, 79, 88]
]
];

// 2. Iterate over the students array with a foreach loop
foreach ($students as $student) {
  $name = $student['name'];
  $grades = $student['grades'];
  // 3. Calculate the average grade for each student
  $average = array_sum($grades) / count($grades);
  echo "$name: Average Grade = $average <br>";
}
```

</details>
