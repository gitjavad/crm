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
       /* echo "code: " . $row["code"]. " - phone: " . $row["phone"]. "-address: " . $row["address"]. "<br>";

       echo '{ "message": "true" }';*/
    }
} else {
    echo '{ "message": "false" }';
}
$sql = "SELECT code_product, material, price_co, price_custom, company, des FROM crm";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        /*echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
        $age=array("code_product"=>$row["code_product"],"material"=>$row["material"],"price_co"=>$row["price_co"],"company"=>);*/
        echo '{ "message":"'.$row.'"}';
    }
} else {
    echo '{ "message": "oh no" }';
}
$conn->close();
