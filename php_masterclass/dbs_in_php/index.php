<?php

$db_host = 'localhost';
$db_name = 'cms';
$user = 'cms_www';
$db_pass = 'bEuRZM@S4eafTcrL';

$conn = mysqli_connect($db_host, $user, $db_name, $db_pass);

if (mysqli_connect_error()) {
    echo mysqli_connect_error();
    exit;
}

echo 'Connected successfully';
