<?php

class Category
{
    // DB Stuff
    private $conn;
    private $table = 'inscricao';

    // Properties
    public $usuario;
    public $evento;
    public $valor;
    public $status;
    public $data_inscricao;

    // Constructor with DB
    public function __construct($db)
    {
        $this->conn = $db;
    }

    // Create Category
    public function create()
    {
        // Create Query
        $query =  $query = 'INSERT INTO ' . $this->table . ' SET usuario = :usuario, evento = :evento, valor = :valor, status = :status, data_inscricao = :data_inscricao';

        // Prepare Statement
        $stmt = $this->conn->prepare($query);

        // Clean data
        $this->usuario = htmlspecialchars(strip_tags($this->usuario));
        $this->evento = htmlspecialchars(strip_tags($this->evento));
        $this->valor = htmlspecialchars(strip_tags($this->valor));
        $this->status = htmlspecialchars(strip_tags($this->status));
        $this->data_inscricao = htmlspecialchars(strip_tags($this->data_inscricao));

        // Bind data
        $stmt->bindParam(':usuario', $this->usuario);
        $stmt->bindParam(':evento', $this->evento);
        $stmt->bindParam(':valor', $this->valor);
        $stmt->bindParam(':status', $this->status);
        $stmt->bindParam(':data_inscricao', $this->data_inscricao);

        // Execute query
        if ($stmt->execute()) {
            return true;
        }

        // Print error if something goes wrong
        printf("Error: %s.\n", $stmt->error);
        return false;
    }
}