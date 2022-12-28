<?php

class Processor
{
    public function charge($creditCard)
    {
        if (strlen($creditCard->getNumber()) !== 16) {
            throw new Exception('Credit card is not right');
        }
    }
}

// $processor = new Processor();
// $processor->charge('1234');

try {
    $processor->charge('1234');
} catch (Exception $e) {
    echo $e->getMessage() . "\n";
}

//can extend the exception class to have your own exception

class MyCustomException extends Exception
{
}

try {
    throw new MyCustomException('I am a custom exception');
} catch (MyCustomException $e) {
    echo "Caught MyCustomException\n";
}
