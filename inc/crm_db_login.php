<?php
$hostname="localhost";
$user = "hirad_admin15023";
$pass= "9133647736!@#";
$mysql_database = "hirad-co_com_site";
$conn = new mysqli($servername, $username, $pass, $dbname);
$username=$_POST['code'];
$password=$_POST['pass'];
    session_start();
    $_SESSION['login_user']=$username;

$sql = "SELECT user FROM crm WHERE user='$username' and pass='$password'";
echo "<script type='text/javascript'>alert('".$sql."')</script>";
$result = $conn->query($sql);
    if (mysqli_num_rows($result) != 0)
    {

        echo "<script type='text/javascript'>alert('hi')</script>";
    }

    else
    {
        echo "<script type='text/javascript'>alert('error')</script>";
    }

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