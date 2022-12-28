<?php

/* 

The word interface is a confusing term because it is used for so many different concepts. Most often, we use it to describe the appearance of an app and how a user interacts with it. However, in PHP, an interface is a special construct that acts as a contract for classes. An interface defines what methods a class should have.

*/


interface Chair
{
    public function setColor(string $color);
    public function setLegs(int $number);
    public function setMaker(string $maker);
}

//how to use the interface
//the class that implements the interface must have the implement keyword and the associated methods
class Recliner implements Chair
{
    private string $color;
    private int $legs;
    private string $maker;

    public function __construct(string $color, int $legs, string $maker)
    {
        $this->color = $color;
        $this->legs = $legs;
        $this->maker = $maker;
    }


    public function setColor($color)
    {
        $this->color = $color;
    }
    public function setMaker($maker)
    {
        $this->maker = $maker;
    }

    public function setLegs($number)
    {
        $this->legs = $number;
    }
}

/* 

USE CASES
Interfaces are helpful when you are using code created by someone else. For example, another developer may have created code that manages online payments, but they want to give you the ability to create your own payment class that works with their code. In that case, the developer creates an interface with all the required methods they need to charge a payment. The interface becomes a contract between your code and the other developer’s code to work a certain way.

*/

interface Payment
{
    public function charge($amount);
}

class CreditCard implements Payment
{
    public function charge($amount)
    {
        // contacts a credit card payment provider...
    }
}

/* 

Since CreditCard implements Payment, a developer can check that it implements Payment and then use the charge method knowing the function exists on the class.

*/
$creditCard = new CreditCard();
if ($creditCard instanceof Payment) {
    $creditCard->charge(25);
}
