<?php 
$db_server = "localhost";
$db_user= "root";
$db_pass = "";
$db_name = "prodextra";
$conn = "";
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

try {

    $conn = mysqli_connect($db_server, $db_user, $db_pass, $db_name);
} catch (mysqli_sql_exception) {
  
  echo json_encode(['status' => 'error', 'message' => 'Connection Error']);
}

if ($conn) {
   
  $products_data = get_data($conn);
    echo json_encode($products_data);
}


function get_data($conn)
{
  header('Content-Type: application/json; charset=utf-8');
$query = "SELECT * FROM products;";

$result = [];
$stm = $conn->query($query);
$products=$stm->fetch_all(MYSQLI_ASSOC);

$result= $products;

return $result;
}
?>


