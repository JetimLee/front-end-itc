<?php

$output = null;;

$fruits = [['Apple', 'Red'], ['Orange', 'Orange'], ['Banana', 'Yellow']];

$colors = ['yellow', 'green', 'blue', 'red', 'purple'];
$colors_reversed = array_reverse($colors);
$colors_merged = array_merge($colors, ['pink', 'orange']);
$colors_with_more_pink = array_splice($colors, 1, 0, 'pink');
array_pop($colors);

$users = [['name' => 'John', 'email' => 'john@gmail.com']];

print_r($colors);
echo '<br>';

for ($i = 0; $i < count($colors); $i++) {
    echo $colors[$i], PHP_EOL;
}


for ($i = 0; $i < 10; $i++) {
    echo $i, PHP_EOL;
}

foreach ($colors as $index => $color) {
    echo $color, $index, PHP_EOL;
};

foreach ($users as $user) {
    foreach ($user as $key => $value) {
        echo '<br>' . 'key: ' . $key . ' ' . 'value: ' . $value . '<br>';
    }
}

$num_array = [];

for ($i = 1; $i <= 10; $i++) {
    for ($j = 1; $j <= 10; $j++) {
        $result = $i * $j;
        array_push($num_array, $result);
        echo $i . " x " . $j . " = " . $result . '<br>';
    }
}

$sum = 0;
$other_num_array = [1, 2, 3, 4, 5,];
$foreach_sum = 0;

for ($i = 0; $i < count($num_array); $i++) {
    $sum += $num_array[$i];
}

foreach ($other_num_array as $num) {
    $foreach_sum += $num;
}
echo $sum . '<br>';
echo $foreach_sum;

$students = [
    // Student 1
    [
        'name' => 'John Doe',
        'grades' => [85, 90, 78, 92]
    ],
    // Student 2
    [
        'name' => 'Jane Smith',
        'grades' => [88, 95, 87, 89]
    ],
    // Student 3
    [
        'name' => 'Bob Johnson',
        'grades' => [75, 80, 92, 78]
    ]
];

foreach ($students as $student) {
    $name = $student['name'];
    $grades = $student['grades'];
    // 3. Calculate the average grade for each student
    $average = array_sum($grades) / count($grades);
    echo "<br>" . "$name: Average Grade = $average <br>";
}
