<?php
error_reporting(-1);
header('Access-Control-Allow-Origin: *');
$ch = curl_init($_GET['urlToGet']);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$data = curl_exec($ch);
curl_close($ch);
echo $data
?>