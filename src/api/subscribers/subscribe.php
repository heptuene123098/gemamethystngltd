<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

include_once '../config/database.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    
    if (!isset($data->email) || empty(trim($data->email))) {
        http_response_code(400);
        echo json_encode(["success" => false, "message" => "Email is required"]);
        exit;
    }

    $email = filter_var(trim($data->email), FILTER_VALIDATE_EMAIL);
    if (!$email) {
        http_response_code(400);
        echo json_encode(["success" => false, "message" => "Invalid email format"]);
        exit;
    }

    try {
        $database = new Database();
        $db = $database->getConnection();

        // Check if email already exists
        $checkQuery = "SELECT id, status FROM subscribers WHERE email = :email";
        $checkStmt = $db->prepare($checkQuery);
        $checkStmt->bindParam(":email", $email);
        $checkStmt->execute();

        if ($checkStmt->rowCount() > 0) {
            $subscriber = $checkStmt->fetch(PDO::FETCH_ASSOC);
            if ($subscriber['status'] === 'active') {
                http_response_code(409);
                echo json_encode(["success" => false, "message" => "Email already subscribed"]);
                exit;
            } else {
                // Reactivate inactive subscriber
                $updateQuery = "UPDATE subscribers SET status = 'active' WHERE email = :email";
                $updateStmt = $db->prepare($updateQuery);
                $updateStmt->bindParam(":email", $email);
                $updateStmt->execute();
                
                echo json_encode(["success" => true, "message" => "Successfully resubscribed!"]);
                exit;
            }
        }

        // Generate verification token
        $verification_token = bin2hex(random_bytes(32));
        $unsubscribe_token = bin2hex(random_bytes(32));

        // Insert new subscriber
        $query = "INSERT INTO subscribers (email, verification_token, unsubscribe_token) 
                  VALUES (:email, :verification_token, :unsubscribe_token)";
        
        $stmt = $db->prepare($query);
        $stmt->bindParam(":email", $email);
        $stmt->bindParam(":verification_token", $verification_token);
        $stmt->bindParam(":unsubscribe_token", $unsubscribe_token);

        if ($stmt->execute()) {
            // Send verification email (you'll implement this)
            // sendVerificationEmail($email, $verification_token);
            
            http_response_code(201);
            echo json_encode([
                "success" => true, 
                "message" => "Successfully subscribed! Please check your email for verification."
            ]);
        } else {
            http_response_code(500);
            echo json_encode(["success" => false, "message" => "Unable to subscribe"]);
        }
    } catch(PDOException $exception) {
        http_response_code(500);
        echo json_encode(["success" => false, "message" => "Database error: " . $exception->getMessage()]);
    }
} else {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed"]);
}
?>