
<?php 


header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

	$link = mysqli_connect("localhost", "root", "", "learning_venky_php");
	
	// Check connection
	if($link === false){
		die("ERROR: Could not connect. " . mysqli_connect_error());
	}


//insert the data  
	
	$id          = mysqli_real_escape_string($link, $_REQUEST['id']);
	$name        = mysqli_real_escape_string($link, $_REQUEST['name']);
	$title       = mysqli_real_escape_string($link, $_REQUEST['title']);
	$image_url   = mysqli_real_escape_string($link, $_REQUEST['image_url']);
	$description = mysqli_real_escape_string($link, $_REQUEST['description']);
	
if(isset($_POST['save'])){	
	$sql = "INSERT INTO angular (id,name, title, image_url, description) VALUES ('$id','$name', '$title', '$image_url', '$description')";

	if(mysqli_query($link, $sql)){
		echo "Records added successfully.<a href=insert.php> Back </a>";
	} else{
		echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
	}
}
 
// get the data

	$sql = "SELECT * FROM angular";
    $result = $link->query($sql);
	
	$outp = "";
	while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
		if ($outp != "") {$outp .= ",";}
		$outp .= '{"id":"'  . $rs["id"] . '",';
		$outp .= '"name":"'   . $rs["name"]  . '",';
		$outp .= '"title":"'. $rs["title"]  . '",'; 
		$outp .= '"image_url":"'. $rs["image_url"]  . '",'; 
		$outp .= '"description":"'. $rs["description"]  . '"}'; 
	}
	$outp ='{"records":['.$outp.']}';
	$link->close();
	echo($outp);
	
	// close connection
	
?>