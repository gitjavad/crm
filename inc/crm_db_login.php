<?php
    include("config.php");
    session_start();
    $username=$_POST['username'];
    $password=$_POST['password'];
echo "<script type='text/javascript'>alert('".$username."')</script>";
    $_SESSION['login_user']=$username;
$sql = "SELECT user FROM crm WHERE username='$username' and password='$password'";
$result = $conn->query($sql);
    if (mysqli_num_rows($result) != 0)
    {


    }

    else
    {
        echo "<script type='text/javascript'>alert('User Name Or Password Invalid!')</script>";
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