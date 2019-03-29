<?php
class Database{
    private $host = 'localhost';
    private $db_name = 'quote';
    private $user = 'root';
    private $pass ='';

    private $conn;
    public function connect(){
        
        
        try{
        $this->conn = new PDO('mysql:host='.$this->host.';dbname='.$this->db_name.';charset=utf8',$this->user,$this->pass);
        $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }catch(PDOException $e){
            echo 'Error: '.$e->getMessage();
        }
        return $this->conn;
    }

}