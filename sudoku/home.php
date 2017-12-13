<?php include "navbar.php" ?>  <!--Linking to NAVBAR.PHP-->

<!DOCTYPE html>
<html>
  <head>

    <title>Sudoku Game</title>
    <link type="text/css" rel= "stylesheet" href= "css/style.css" /> <!--Linking to an external style sheet-->
  
  </head>

<body class="home">
    <div id="container">
    
    <?php print_navbar(); ?>    <!-- PHP CODE FOR NAVIGATION BAR COMES HERE-->

<div class="main">
	<div class="content">

      <table id="frameOfAllSudoku">

        <tr>
          <td><input id="0-0" class="tile" type="text"></td>
          <td><input id="0-1" class="tile" type="text"></td>
          <td><input id="0-2" class="tile" type="text"></td>
          
          <td><input id="0-3" class="tile" type="text"></td>
          <td><input id="0-4" class="tile" type="text"></td>
          <td><input id="0-5" class="tile" type="text"></td>
          
          <td><input id="0-6" class="tile" type="text"></td>
          <td><input id="0-7" class="tile" type="text"></td>
          <td><input id="0-8" class="tile" type="text"></td>
        </tr>

        <tr>
          <td><input id="1-0" class="tile" type="text"></td>
          <td><input id="1-1" class="tile" type="text"></td>
          <td><input id="1-2" class="tile" type="text"></td>
          
          <td><input id="1-3" class="tile" type="text"></td>
          <td><input id="1-4" class="tile" type="text"></td>
          <td><input id="1-5" class="tile" type="text"></td>
          
          <td><input id="1-6" class="tile" type="text"></td>
          <td><input id="1-7" class="tile" type="text"></td>
          <td><input id="1-8" class="tile" type="text"></td>
        </tr>

        <tr>
          <td><input id="2-0" class="tile" type="text"></td>
          <td><input id="2-1" class="tile" type="text"></td>
          <td><input id="2-2" class="tile" type="text"></td>
          
          <td><input id="2-3" class="tile" type="text"></td>
          <td><input id="2-4" class="tile" type="text"></td>
          <td><input id="2-5" class="tile" type="text"></td>
          
          <td><input id="2-6" class="tile" type="text"></td>
          <td><input id="2-7" class="tile" type="text"></td>
          <td><input id="2-8" class="tile" type="text"></td>
        </tr>

        <tr>
          <td><input id="3-0" class="tile" type="text"></td>
          <td><input id="3-1" class="tile" type="text"></td>
          <td><input id="3-2" class="tile" type="text"></td>
          
          <td><input id="3-3" class="tile" type="text"></td>
          <td><input id="3-4" class="tile" type="text"></td>
          <td><input id="3-5" class="tile" type="text"></td>
          
          <td><input id="3-6" class="tile" type="text"></td>
          <td><input id="3-7" class="tile" type="text"></td>
          <td><input id="3-8" class="tile" type="text"></td>
        </tr>

        <tr>
          <td><input id="4-0" class="tile" type="text"></td>
          <td><input id="4-1" class="tile" type="text"></td>
          <td><input id="4-2" class="tile" type="text"></td>
          
          <td><input id="4-3" class="tile" type="text"></td>
          <td><input id="4-4" class="tile" type="text"></td>
          <td><input id="4-5" class="tile" type="text"></td>
          
          <td><input id="4-6" class="tile" type="text"></td>
          <td><input id="4-7" class="tile" type="text"></td>
          <td><input id="4-8" class="tile" type="text"></td>
        </tr>

        <tr>
          <td><input id="5-0" class="tile" type="text"></td>
          <td><input id="5-1" class="tile" type="text"></td>
          <td><input id="5-2" class="tile" type="text"></td>
          
          <td><input id="5-3" class="tile" type="text"></td>
          <td><input id="5-4" class="tile" type="text"></td>
          <td><input id="5-5" class="tile" type="text"></td>
          
          <td><input id="5-6" class="tile" type="text"></td>
          <td><input id="5-7" class="tile" type="text"></td>
          <td><input id="5-8" class="tile" type="text"></td>
        </tr>

        <tr>
          <td><input id="6-0" class="tile" type="text"></td>
          <td><input id="6-1" class="tile" type="text"></td>
          <td><input id="6-2" class="tile" type="text"></td>
          
          <td><input id="6-3" class="tile" type="text"></td>
          <td><input id="6-4" class="tile" type="text"></td>
          <td><input id="6-5" class="tile" type="text"></td>
          
          <td><input id="6-6" class="tile" type="text"></td>
          <td><input id="6-7" class="tile" type="text"></td>
          <td><input id="6-8" class="tile" type="text"></td>
        </tr>

        <tr>
          <td><input id="7-0" class="tile" type="text"></td>
          <td><input id="7-1" class="tile" type="text"></td>
          <td><input id="7-2" class="tile" type="text"></td>
          
          <td><input id="7-3" class="tile" type="text"></td>
          <td><input id="7-4" class="tile" type="text"></td>
          <td><input id="7-5" class="tile" type="text"></td>
          
          <td><input id="7-6" class="tile" type="text"></td>
          <td><input id="7-7" class="tile" type="text"></td>
          <td><input id="7-8" class="tile" type="text"></td>
        </tr>

        <tr>
          <td><input id="8-0" class="tile" type="text"></td>
          <td><input id="8-1" class="tile" type="text"></td>
          <td><input id="8-2" class="tile" type="text"></td>
          
          <td><input id="8-3" class="tile" type="text"></td>
          <td><input id="8-4" class="tile" type="text"></td>
          <td><input id="8-5" class="tile" type="text"></td>
          
          <td><input id="8-6" class="tile" type="text"></td>
          <td><input id="8-7" class="tile" type="text"></td>
          <td><input id="8-8" class="tile" type="text"></td>
        </tr>
      </table>

    <div id="GameControls">
        
        
        <button class="button">New game</button>
        <button class="button">Clear all</button>
        <button class="button">Delete</button>


        <div class="timer">
        <div id="timer" class = "stats"> 00 : 00 : 00</div>

        <!--<div class="timer">
        <div class = "statsTime"> <p id="days">00 </p>
                              <p> : </p>
                              <p id="hours">00</p>
                              <p> : </p>
                              <p id="minutes">00</p>
                              <p> : </p>
                              <p id="seconds">00</p>-->
                              </div>

        <div class = "stats">Your Score:  </div>   
        <div class = "stats">Top Score:  </div>    
      </div>

    </div>


    <div id="sidebar">
      <h3>Buy here</h3>
         <!-- Linking to amazon recommend book (Robin Wilson)-->
      <a> <img src="images/sudoku_image_sideBar1.jpg" width="110px" height="130px" align="right" alt=" Books by Robin Wilson"> </a>
      <a href="https://www.amazon.co.uk/How-solve-sudoku-Step-step/dp/1904902626"> How to solve sudoku: A Step-by-step Guide (52 Brilliant Ideas) from this book you will learn how become profesional in Sudoku.  </a>
                
            <hr/>

      <a> <img src="images/sudoku_solvingTecg.jpg" width="90px" height="120px" align="right" alt=" Books by Sam Aaron"> </a>
      <a href="https://www.amazon.co.uk/Sudoku-Solving-Techniques-Sam-Aaron/dp/1493624520/ref=pd_lpo_sbs_14_img_1?_encoding=UTF8&psc=1&refRID=N984PRV1A8YBGJZ9W1S8"> Sudoku Solving Techniques. Also this book can teach you how to become profesional in Sudoku.  </a>
                
            <hr/>

    </div> <!--end of side bar-->

    <div class = "time">
      
    </div> <!-- End of .-->

</div><!-- End of .main-->

      <?php include "footer.php" ?> <!--Linking to FOOTER.PHP-->
      <?php print_footer(); ?>      <!-- PHP CODE FOR FOOTER COMES HERE-->

    </div> <!--end of footer-->
 </div>  <!-- end of content-->
 <script type="text/javascript" src="js/sketch.js"></script>
 <script type="text/javascript">
   redirectIfUnauthenticated();
 </script>
</body>
</html>



