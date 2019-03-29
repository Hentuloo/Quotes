<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

require_once '../../config/Database.php';
require_once '../../models/Post.php';

$db = new Database();
$db = $db->connect();

$post = new Post($db);
$post->category_type = isset($_GET['category']) ? $_GET['category'] : 'All';

$result= $post->read_simple();
$row_num = $result->rowCount();

if($row_num){
    $quotes = array();
    $quotes['data']=array();

    while($row = $result->fetch(PDO::FETCH_ASSOC)){
        extract($row);
        $quote = array(
            'id' => $q_id,
            'quote'=>$q_content,
            'description'=>$q_description,
            'author'=>$q_author,
        );
        array_push($quotes['data'],$quote);
    }
    echo json_encode($quotes);
}else{
   echo json_encode(array('message'=>'We have some problem'));
}
