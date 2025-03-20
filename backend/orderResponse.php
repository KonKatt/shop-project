<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    if ($data) {
        $order = $data['cart'];
        echo json_encode(['status' => 'success', 'message' => $order]);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'No data received']);
    }

} else {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Method Not Allowed']);
}
?>