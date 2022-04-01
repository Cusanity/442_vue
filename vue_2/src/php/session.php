<?php

function getEmailWithCookie($mysqli, $cookie): string
{
    $email = "";
    $stmt = $mysqli->prepare("SELECT email FROM user WHERE cookie = ?");
    $stmt->bind_param("s", $cookie);
    $stmt->execute();
    $stmt->bind_result($email);
    $stmt->fetch();
    $stmt->close();
    return $email;
}

function getTasksWithEmail($mysqli, $email): array
{
    $myArray = array();
    $stmt = $mysqli->prepare("SELECT * FROM tasks WHERE email = ? ORDER BY due_date");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $res = $stmt->get_result();
    while($row = $res->fetch_array(MYSQLI_ASSOC)) {
        $myArray[] = $row;
    }
    return $myArray;
}

function getCardsWithEmail($mysqli, $email): array
{
    $myArray = array();
    $stmt = $mysqli->prepare("SELECT * FROM cards WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $res = $stmt->get_result();
    while($row = $res->fetch_array(MYSQLI_ASSOC)) {
        $myArray[] = $row;
    }
    return $myArray;
}

session_start();
$res = "Login Success";
$servername = "128.205.36.4";
$username = "ywang298";
$password = "50336558";
$database = "cse442_2022_spring_team_c_db";
$mysqli = new mysqli($servername, $username, $password, $database);
$resp = array();
if ($_SERVER['REQUEST_METHOD'] == "GET") {
    if (isset($_COOKIE["loginCookie"]) && strlen($_COOKIE["loginCookie"]) == 64) {
        $resp["logged_in"] = "true";
        $_SESSION["email"] = getEmailWithCookie($mysqli, $_COOKIE["loginCookie"]);
        if (isset($_GET["param"])) {
            if ($_GET["param"] == "email") {
                $resp["email"] = $_SESSION["email"];
            } else if ($_GET["param"] == "clearsession") {
                setcookie("loginCookie", "", time() - 1);
                header("Location: ../login.html");
            } else if ($_GET["param"] == "tasks") {
                $resp["tasks"] = getTasksWithEmail($mysqli, $_SESSION["email"]);
            } else if ($_GET["param"] == "cards") {
                $resp["cards"] = getCardsWithEmail($mysqli, $_SESSION["email"]);
            }
        }
    } else {
        $resp["logged_in"] = "false";
    }
}
echo json_encode($resp);