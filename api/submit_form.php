<?php

// header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Methods: GET, POST');
// header('Access-Control-Allow-Headers: X-Requested-With');

header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
    header("Content-type:application/json");
    $data = json_decode(file_get_contents("php://input"));
    // echo "received data";
    // print_r($data);
    
    $filename = 'submit/create-update.json';
    
    echo file_get_contents($filename);
    
exit();