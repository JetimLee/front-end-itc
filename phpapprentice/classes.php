<?php

class Car
{
    public $color;
    public $make;

    public function drive()
    {
        echo "\nWe're driving a " . $this->make;
    }
}


$mycar = new Car();
$mycar->color = "Black";
$mycar->make = "Toyota";
echo $mycar->make;

$mycar->drive();
