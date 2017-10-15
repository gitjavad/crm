<?php
$servername = "localhost";
$username = "hirad_admin15023";
$password = "9133647736!@#";
$dbname = "hirad-co_com_site";


$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT user, pass, code, cat, price_co, price_custom, com FROM crm";
$result = $conn->query($sql);

if ($result->num_rows > 0) {

    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["user"]. " - pass: " . $row["pass"]. "<br>";
    }
} else {
    echo "0 results";
}
$conn->close();
?>