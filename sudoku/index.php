<!DOCTYPE html>
<html>
  <head>

    <title>Sudoku Game</title>
    <link type="text/css" rel= "stylesheet" href= "css/style.css" />  <!--Linking to an external style sheet-->
  
  </head>

  <body class="index">

  <div class="container">

    <div class="header">
      <a href="index.html"><img src="images/logo.png" style="display: inline;float:left;"/></a>
      <h1 id = "sudoku" > Sudoku </h1>
    </div> <!-- End of header div for logo and Sudoku title -->


    <div class="auth">
      <div class="register">
        <h2>Sign Up</h2>

        <div class="form-group">
          <label><b>Name: </b></label>
          <input type="text" id = "Name" placeholder="Enter User ID" name="Name" required>
        </div>  <!-- End of form-group -->

        <div class="form-group">
          <label><b>User ID: </b></label>
          <input type="text" id = "userId" placeholder="Enter User ID" name="User ID" required>
        </div>  <!-- End of form-group -->

        <div class="form-group">
          <label><b>Email address: </b></label>
          <input type="text" id = "emailAddress" placeholder="Enter Email" name="email" required>
        </div>  <!-- End of form-group -->

        <div class="form-group">
          <label><b>Password: </b></label>
          <input type="password" id = "password" placeholder="Enter Password" name="psw" required>
        </div>  <!-- End of form-group -->

        <div class="form-group">
          <label><b>Verify Password: </b></label>
          <input type="password" id = "verifyPassword" placeholder="Verify Password" name="psw-verify" required>
        </div>  <!-- End of form-group -->
        

        <div class="clearfix">
          <button type="button" onclick="signUp()" id = "signUp" class="Register">Sign up</button>
        </div> <!-- End of clearfix for Register button -->

        <p id="result"></p>
      </div> <!-- End of register div -->

      <div class="login">

        <h2>Log in</h2>
       <div class="form-group">
        <label><b>User ID: </b></label>
        <input type="text" id = "loginUserId" placeholder="Enter Username" name="uname" required>
       </div>  <!-- End of form-group -->

       <div class="form-group">
        <label><b>Password: </b></label>
        <input type="password" id = "loginPassword" placeholder="Enter Password" name="psw" required>
       </div>  <!-- End of form-group -->

        <div class="clearfix">
        	<button type="submit" onclick = "login()" >Login</button>
        </div> <!-- End of clearfix for Log in button -->

        <p id="loginFailure"></p>
        <p id="logIn"></p>
      </div>
    </div><!-- End of auth -->
  </div> <!-- End of container -->

  <?php include "footer.php" ?>   <!--Linking to FOOTER.PHP-->
  <?php print_footer(); ?>		<!-- PHP CODE FOR FOOTER COMES HERE-->


  </body>
</html>
    


