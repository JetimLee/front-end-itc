<?php

class Vehicle
{
    public function drive()
    {
        echo "driving...\n";
    }
}

class Truck extends Vehicle
{
}

class Tractor extends Vehicle
{
    public function drive()
    {
        echo "driving slowly...\n";
    }
}

class Motorcycle extends Vehicle
{
    public function pushPedal()
    {
        $this->drive();
    }
}

class Racecar extends Vehicle
{
    public function drive()
    {
        //how to explicitly access the parents method as without this the drive method in racecar overrides the ones in vehicle and only driving even faster will be printed
        parent::drive();

        echo "driving even faster...\n";
    }
}

$mytruck = new Truck();
$mytruck->drive();

$mytractor = new Tractor();
$mytractor->drive();

$cycle = new Motorcycle();
$cycle->pushPedal();

$racecar = new Racecar();
$racecar->drive();
