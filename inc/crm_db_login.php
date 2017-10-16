<?php
$hostname="localhost";
$user = "hirad_admin15023";
$pass= "9133647736!@#";
$mysql_database = "hirad-co_com_site";
$conn = new mysqli($hostname, $user, $pass, $mysql_database);
mysqli_set_charset($conn,'utf8');
$username=$_POST['code'];
$password=$_POST['pass'];
$sql = "SELECT code FROM crm_login WHERE code='$username' AND pass='$password'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {

    while($row = $result->fetch_assoc()) {
      $suc=true;

    }
} else {
    $suc=false;
}
if ($suc) {
    $sql = "SELECT code_product, material, price_co, price_custom, company, des FROM crm";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {

        while ($row = $result->fetch_assoc()) {


            echo json_encode($row);
        }
    } else {

    }
}else{

}
$conn->close();
