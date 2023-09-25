<?php
$firstName = $_POST['firstName'];
$email = $_POST['email'];
$number = $_POST['number'];
$sms = $_POST['sms'];


//Database Connection

$conn = new mysqli('localhost', 'root', '', 'koushik');
if($conn->connect_error){
    die('Connection Failed : ' .$conn->connect_error);
} else {
    $stmt = $conn->prepare("Insert into registration(firstName, email, number, sms)
    values(?, ?, ?, ?)");
    $stmt->bind_param("ssis", $firstName, $email, $number, $sms);
    $stmt->execute();
    echo "Registration successful. <a href='Contact.html'>Go back</a> to register another user.";
    $stmt->close();
    $conn->close();
}



?>