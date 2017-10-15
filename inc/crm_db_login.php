<?php
$hostname="localhost";
$user = "hirad_admin15023";
$pass= "9133647736!@#";
$mysql_database = "hirad-co_com_site";
$conn = new mysqli($servername, $username, $pass, $dbname);
$username=$_POST['code'];
$password=$_POST['pass'];


$sql = "SELECT code FROM crm_login WHERE code='$username' and pass='$password'";
echo $sql;
$result = $conn->query($sql);
if ($result->num_rows > 0) {

    while($row = $result->fetch_assoc()) {
        echo "code: " . $row["code"]. " - phone: " . $row["phone"]. "-address: " . $row["address"]. "<br>";
    }
} else {
    echo "0 results";
}
$conn->close();
?>
/*$servername = "localhost";
$username = "hirad_admin15023";
$password = "9133647736!@#";
$dbname = "hirad-co_com_site";
$login_user=$_POST('username');
$login_pass=$_POST('password');

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
*/