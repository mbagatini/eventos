<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once '../config/Database.php';
include_once '../model/Inscricao.php';

// Instantiate DB & connect
$database = new Database();
$db = $database->connect();

// Instantiate object
$inscr = new Inscricao($db);

// Get raw posted data
$data = json_decode(file_get_contents("php://input"));
$inscr->usuario = $data->usuario;
$inscr->evento = $data->evento;
$inscr->valor = $data->valor;
$inscr->status = $data->status;
$inscr->data_inscricao = $data->data_inscricao;

// Create inscr
if ($inscr->create()) {
    echo json_encode(
        array('message' => 'Created')
    );
} else {
    echo json_encode(
        array('message' => 'Error')
    );
}
