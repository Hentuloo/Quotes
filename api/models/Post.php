<?php
class Post{

    private $conn;
    public $titles=['Propozycję nowego cytatu','Błąd w aplikacji','Wiadomość do administratora'];

    public $title;
    public $message;
    public $author;
    public $author_email;
    
    public $category_type;


    public function __construct($db){
        $this->conn = $db;
        
    }

   public function read_simple(){
    if($this->category_type !== 'all'){
    $query='SELECT 
    quote_id as q_id,
    quote_content as q_content,
    quote_description as q_description,
    quote_author as q_author
    FROM 
    quotes
    WHERE
    quotes.quote_categories LIKE "%'.$this->category_type.'%" 
    ORDER BY RAND()
    LIMIT 1
    ';
    }else{
    $query='SELECT 
    quote_id as q_id,
    quote_content as q_content,
    quote_description as q_description,
    quote_author as q_author
    FROM 
    quotes
    ORDER BY RAND()
    LIMIT 1
    ';
    }

    $stmt = $this->conn->prepare($query);
    $stmt->execute();
    return $stmt;
    }
    
    public function send_main(){
        
        $validation = true;
        
        if(!preg_match("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$^",$this->author_email))
        { 
            $validation=false;
        }

     $this->message=$this->test_input($this->message);
     $this->author=$this->test_input($this->author);

        if(strlen($this->message)<10||strlen($this->message)>200||strlen($this->author)<5||strlen($this->author)>20||!is_numeric($this->title)||$this->title<0||$this->title>3){
            $validation=false;
        }
       return $validation;
        
    }
    
    
public function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
}