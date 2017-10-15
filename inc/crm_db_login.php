<?php
$hostname="localhost";
$user = "hirad_admin15023";
$pass= "9133647736!@#";
$mysql_database = "hirad-co_com_site";
$conn = new mysqli($hostname, $user, $pass, $mysql_database);
$username=$_POST['code'];
$password=$_POST['pass'];

$sql = "SELECT code FROM crm_login WHERE code='$username' AND pass='$password'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {

    while($row = $result->fetch_assoc()) {
        echo "code: " . $row["code"]. " - phone: " . $row["phone"]. "-address: " . $row["address"]. "<br>";
    }
} else {
    echo "0 results";
}
$conn->close();
