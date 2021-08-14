<!DOCTYPE html>
<html>
<head>
	<title>Kwitter</title>
<link href="https://fonts.googleapis.com/css?family=Yeon+Sung&display=swap" rel="stylesheet"><meta name="viewport" content="width=device-width, initial-scale=1">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Otomanopee+One&display=swap" rel="stylesheet">

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>

<script src="https://www.gstatic.com/firebasejs/7.6.2/firebase-app.js"></script>
 <script src="https://www.gstatic.com/firebasejs/7.6.2/firebase-firestore.js"></script>
	 <script src="https://www.gstatic.com/firebasejs/live/3.1/firebase.js"></script>

<link rel="stylesheet" type="text/css" href="style.css">
<script src="kwitter.js"></script>
</head>
<body>
<center>
	<h1 class="header">	
		Kwitter	<sup>
	<img src="m2.png">
	</sup>
</h1>
	<div class="col-lg-4 col-md-6 col-sm-6 col-xs-11 login_div">
	<img src="logo.png" class="logo">
		<h3 >See what is happening in the world right now</h3>
		<h4 >Join Kwitter today</h4>
		<div class="form-group">
		  <label >User Name:</label>
			<input type="text" id="username" class="form-control" placeholder="enter your username">

		</div>
		<button id="login_button" class="btn btn-primary" onclick="add_user()">Log in</button>
		<br><br>
	</div>
</center>
</body>
</html>