<?php 

header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');

$data = [
    [
        "name" => "HTML",
        "percentage" => 85
    ],
    [
        "name" => "CSS",
        "percentage" => 75
    ],
    [
        "name" => "JAVASCRIPT",
        "percentage" => 70
    ],
    [
        "name" => "JQUERY",
        "percentage" => 80
    ],
    [
        "name" => "REACT JS",
        "percentage" => 30
    ],
    [
        "name" => "PHP Native",
        "percentage" => 70
    ],
    [
        "name" => "CODEIGNITER",
        "percentage" => 75
    ],
    [
        "name" => "LARAVEL",
        "percentage" => 85
    ],
    [
        "name" => "MYSQL",
        "percentage" => 80
    ],
    [
        "name" => "GIT & GITHUB",
        "percentage" => 75
    ],
    [
        "name" => "REST API",
        "percentage" => 65
    ],
    [
        "name" => "BOOTSTRAP",
        "percentage" => 90
    ]
];

echo json_encode($data, JSON_PRETTY_PRINT);
?>
