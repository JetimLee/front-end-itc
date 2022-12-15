<?php

class Phone
{
    private $number;

    public function setNumber($number)
    {
        $this->number = $number;
    }
    public function getNumber()
    {
        return $this->number;
    }
}

//exercising control over what can be put as the instance variables
class Phone2
{
    private $number;

    public function setNumber($number)
    {
        if (substr($number, 0, 1) !== '7') {
            $this->number = $number;
        } else {
            echo "\nAn invalid number was sent to the setNumber function";
            throw new Error("Invalid argument");
        }
    }
}

$myphone = new Phone();
$myphone->setNumber("111111111");
$mynumber = $myphone->getNumber();
echo $mynumber;

// $myotherphone = new Phone2();
// $myotherphone->setNumber("720");

//protected values can be accessed by child classes, same as all other OOP styled languages
class Phone3
{
    private $number;

    protected $caller;

    public function setNumber($number)
    {
        $this->number = $number;
    }
}

class Smartphone extends Phone3
{
    public function setCaller($caller)
    {
        $this->caller = $caller;
    }
}
