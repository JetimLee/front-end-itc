<?php

/* 

Abstract classes are similar to interfaces in that they define methods that a sub-class must implement. However, an abstract class can also have normal methods. To create an abstract class, use the abstract keyword followed by class and the name of the class.

*/
abstract class CellPhone
{
    abstract public function unlock();
    abstract public function takePicture();

    public function turnOn()
    {
        echo "Holding power button...\n";
    }
}

class iPhone extends CellPhone
{
    private int $model_number;
    private int $memory_amount;
    private string $phone_color;

    public function __construct(int $model_number, int $memory_amount, string $phone_color)
    {
        $this->model_number = $model_number;
        $this->memory_amount = $memory_amount;
        $this->phone_color = $phone_color;
    }

    public function unlock()
    {
        echo "Touching fingerprint reader...\n";
    }
    public function takePicture()
    {
        echo "Took a picture...\n";
    }
}

class Android extends CellPhone
{
    public function unlock()
    {
        echo "Typing passcode...\n";
    }
    public function takePicture()
    {
        echo "Took a picture...\n";
    }
}

$my_iphone = new iPhone(13, 556, "black");
$my_iphone->unlock();

/* 

You cannot create an instance of an abstract class. PHP would not know how to use the abstract methods so when you try to create an abstract instance you will get an error.
$cellphone = new CellPhone(); would throw an error
*/