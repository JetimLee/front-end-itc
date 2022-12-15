<?php

class Hat
{
    public $color;

    public function setColor($color)
    {
        $this->color = $color;
    }
}

$hat = new Hat();

class Ballcap
{
    public $color;

    public function __construct($color)
    {
        $this->color = $color;
    }
}

$ballcap = new Ballcap('Blue');

class Tophat
{
    public function __construct($color)
    {
        return $color;
    }
}
$tophat = new Tophat('Grey');
