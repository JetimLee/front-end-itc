<?php
class House
{
    public $color;

    public function __construct($color)
    {
        $this->color = $color;
    }
}
$house = new House('Green');

class Skyscraper
{
    /* 
    However, what if you want the 
    blueprint to have properties and methods? 
    That is when you use the static keyword. In this class, we will define a default color on the class itself and then use it when creating a new object.
    */
    private static $popularColor;
    public $color;

    public static function setDefaultColor($color)
    {
        self::$popularColor = $color;
    }

    public function __construct()
    {
        $this->color = self::$popularColor;
    }
}

/* 
You can access static methods and properties using double colons on self inside the object or on the class name outside of the object. Static methods and properties can only access other static methods and properties.
*/

Skyscraper::setDefaultColor('Grey');
$skyscraper = new Skyscraper();
echo $skyscraper->color . "\n";

class TinyHouse
{
    private $color;
    private $wheels;
    private $trailer;

    public static function build($color, $wheels, $trailer)
    {
        return new self($color, $wheels, $trailer);
    }

    public function __construct(string $color, string $wheels, bool $trailer)
    {
        $this->color = $color;
        $this->wheels = $wheels;
        $this->trailer = $trailer;
    }
}
$house = TinyHouse::build('Blue', 4, true);
$otherhouse = new TinyHouse("Red", 4, true);
//here the class defined method is used instead of the New keyword, this is just a matter of preference and doesn't have a big difference, this may just make the code more readable.