// js for registartion

	function signUp() {

		var usrObject = { };
		usrObject.userId = document.getElementById("userId").value;
		usrObject.emailAddress = document.getElementById("emailAddress").value;
		usrObject.password = document.getElementById("password").value;
		usrObject.verifyPassword = document.getElementById("verifyPassword").value;
	
		let empty = Boolean(Object.values(usrObject).filter(data => data == "").length)

		if (empty) {
			//Inform user of an error
			document.getElementById("result").innerHTML = "<b> Registration failed, please fill in all fields. </b>"
			return;
		}
		usrObject.score = 0;
		//Store user
		localStorage[usrObject.emailAddress] = JSON.stringify(usrObject);

		//Inform user of result
		document.getElementById("result").innerHTML = "<b> Registration successful. </b>"

	}
// js for log in 

	function checkLogin() {
		if(localStorage.loggedInUsrEmail !== undefined) {

			//Extract details of logged in user
			var usrObj = JSON.parse(localStorage[localStorage.loggedInUsrEmail]);

			// logged in user
			document.getElementById("logIn").innerHTML = usrObj.userId + "logged in.";
		}
	}

	function login() {
		// Get email address
		var id = document.getElementById("loginUserId").value;

		// If User does not have an account 
		if(localStorage[id] === undefined) {
			// Inform user that they do not have an account
			document.getElementById("loginFailure").innerHTML = "User ID not recognised. Do you have an account?";
		}
		else { // If User has an account
			var userObj = JSON.parse(localStorage[id]); // Convert to object
			var password = document.getElementById("loginPassword").value
			if (password === userObj.password) { // Succesful login
				document.getElementById("logIn").innerHTML = userObj.userId + " logged in.";
				document.getElementById("loginFailure").innerHTML = ""; // Clear any login failures
				localStorage.loggedInUser = JSON.stringify(userObj);
				window.location.href = "home.php";
			}
			else {
				document.getElementById("loginFailure").innerHTML = "Password not correct. Please try again.";
			}

		}
	}

	function logout () {
		delete localStorage.loggedInUser;
		window.location.href = "index.php";
	}

	function getUser () {  // return the logged in user object 
		return localStorage.loggedInUser ? JSON.parse(localStorage.loggedInUser) : undefined;
	}


	function redirectIfUnauthenticated () { 
		if (getUser() === undefined) {
			window.location.href = "index.php";
		}
	}

	function setScore(userScored){
		var usrObj = JSON.parse(localStorage[localStorage.loggedInUsrEmail]);
		usrObj.score = userScored;
		localStorage[usrObj.emailAddress] = JSON.stringify(usrObj);

	}