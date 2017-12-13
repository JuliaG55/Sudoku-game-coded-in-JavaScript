<?php include "navbar.php" ?>  <!--Linking to NAVBAR.PHP-->

<!DOCTYPE html>
<html>
  <head>

    <title>Sudoku Game</title>
    <link type="text/css" rel= "stylesheet" href= "css/style.css" />  <!--Linking to an external style sheet-->
  
  </head>
      
<body class="home">
    <div id="container">
    	
    	<?php print_navbar(); ?> <!-- PHP CODE FOR NAVIGATION BAR COMES HERE-->

       <div >
   <iframe id="frame" src="https://docs.google.com/forms/d/19lA68Y_04LTnFN3EZjvJP2lV69XemG3DlwZEUF7d-2c/viewform?embedded=true" width="760" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
       </div> <!--End of div frame-->





    <?php include "footer.php" ?> <!--Linking to FOOTER.PHP-->
    <?php print_footer(); ?>      <!-- PHP CODE FOR FOOTER COMES HERE-->

    
 <script type="text/javascript">
   redirectIfUnauthenticated();
 </script>

  </body>
</html>
    