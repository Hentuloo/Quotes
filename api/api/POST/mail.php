<?php
 header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

require_once '../../config/Database.php';
require_once '../../models/Post.php';
  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();
  // Instantiate blog post object
  $post = new Post($db);
  // Get raw posted data
  $data = json_decode(file_get_contents("php://input"));


 $post->title=$data->title;
 $post->message=$data->message;
 $post->author=$data->author;
 $post->author_email=$data->author_email;

if($post->send_main()) {
    
    mail('szyszaqaz@o2.pl',$post->titles[$post->title-1], $post->message, $headers = 'From:'.$post->author_email. "\r\n" .'Reply-To: szyszaqaz@o2.pl' . "\r\n" . 'X-Mailer: PHP/' . phpversion(););
    
    
//    echo json_encode(
//      array('message' => 'e-mail was sant','title'=>$post->titles[$post->title-1],'author'=>$post->author_email)
//    );
  } else {
    echo json_encode(
      array('message' => 'Post Not Created')
    );
  }
