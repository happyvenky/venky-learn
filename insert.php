<!DOCTYPE html>
   <html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>Add Record Form</title>
	

    </head>
    <body>
		<form action="database.php" method="post">
			<p>
				<label for="name">Name:</label>
				<input type="text" name="name" id="name">
			</p>
			<p>
				<label for="title">title:</label>
				<input type="text" name="title" id="title">
			</p>

			<p>
				<label for="image_url">image_url:</label>
				<input type="text" name="image_url" id="image_url">
			</p>
			<p>
				<label for="description	">description</label>
				<input type="text" name="description" id="description">
			</p>
			<input type="submit" name="save" value="Submit">
		</form>
	</body>
	</html>

