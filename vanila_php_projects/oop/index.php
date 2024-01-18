<?php

class User
{
    public $name;
    public $email;
    public static $total_users = 0;
    protected $status = "active";

    public function __construct($name, $email)
    {
        $this->name = $name;
        $this->email = $email;
        User::$total_users += 1;
    }

    public function set_status($newStatus)
    {
        $this->status = $newStatus;
    }
    public function get_status()
    {
        echo $this->status . '<br>';
    }

    public function login()
    {
        echo 'The user logged in' . '<br>';
    }
}
class Admin extends User
{
    private int $level;

    public function __construct($name, $email, int $level)
    {
        $this->level = $level;
        parent::__construct($name, $email);
    }
    public function get_level()
    {
        echo $this->level . "<br>";
    }
}

$sapir = new Admin("Sapir", "something1@gmail.com", 5);

$sapir->get_level();

$gavin = new User("Gavin", "something@gmail.com");
$gavin2 = new User("Gavin", "something@gmail.com");

$gavin->login();
$gavin->set_status("jiving");
$gavin->get_status();
echo User::$total_users . "<br>";

class Article
{
    private $published = false;
    public $title;
    public $content;

    public function __construct($newTitle, $newContent)
    {
        $this->title = $newTitle;
        $this->content = $newContent;
    }
    public function set_published()
    {
        $this->published = true;
    }
    public function isPublished()
    {
        return $this->published;
    }
}

$article1 = new Article("Gavin", "Something content");
$article2 = new Article("Sapir", "More content");
$article1->set_published();
$article1->isPublished();
var_dump($article1);
var_dump($article2);
echo var_dump($article2->isPublished());
echo var_dump($article1->isPublished());

class StringUtility
{
    static function shout(string $theThingToShout)
    {
        return strtoupper($theThingToShout) . "!" . "<br>";
    }

    static function whisper(string $theThingToWhisper)
    {
        return strtolower($theThingToWhisper) . "." . "<br>";
    }
    static function repeat(string $whatToRepeat, int $theNumberOfTimes = 2)
    {
        for ($i = 0; $i < $theNumberOfTimes; $i++) {
            echo $whatToRepeat . "<br>";
        }
    }
}

StringUtility::repeat("Gavin rocks", 5);
StringUtility::repeat("Gavin rocks more");
echo StringUtility::whisper("gavin is whispering");
echo StringUtility::shout("Gavin is shouting");
