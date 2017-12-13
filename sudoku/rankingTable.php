<?php include "navbar.php" ?>  <!--Linking to NAVBAR.PHP-->

<!DOCTYPE html>
<html>
  <head>

    <title>Sudoku Game</title>
    <link type="text/css" rel= "stylesheet" href= "css/style.css" />    <!--Linking to an external style sheet-->
  
  </head>

<body class="home">
    <div id="container">
    
			<?php print_navbar(); ?>   <!-- PHP CODE FOR NAVIGATION BAR COMES HERE-->

<div class="main">
  <div class="content">
    <div class="rankingTable">
    <table>
      <thead>

        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Score</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td> 1</td>
          <td> Julia </td>
          <td> 50 </td>
        </tr>
        <tr>
          <td> 2 </td>
          <td> David </td>
          <td> 72 </td>
        </tr>
        <tr>
          <td> 3 </td>
          <td> Michael </td>
          <td> 20 </td>
        </tr>
        <tr>
          <td> 4 </td>
          <td> Frida </td>
          <td> 65 </td>
        </tr>
        <tr>
          <td> 5 </td>
          <td> Tom </td>
          <td> 10 </td>
        </tr>
        <tr>
          <td> 6 </td>
          <td> Kelly </td>
          <td> 90 </td>
        </tr>
        <tr>
          <td> 7 </td>
          <td> Bob </td>
          <td> 15 </td>
        </tr>
        <tr>
          <td> 8 </td>
          <td> Vera </td>
          <td> 90 </td>
        </tr>
        <tr>
          <td> 9 </td>
          <td> Daniel </td>
          <td> 75 </td>
        </tr>
        </tbody>



    </table>
  </div>
  </div> <!-- end of rankingTable-->

</div><!-- End of .main-->


		   <?php include "footer.php" ?>  <!--Linking to FOOTER.PHP-->
		   <?php print_footer(); ?>       <!-- PHP CODE FOR FOOTER COMES HERE-->
		   
 </div>  <!-- end of content-->
</div><!-- End of contain-->

 <script type="text/javascript">
   redirectIfUnauthenticated();
 </script>
</body>
</html>
