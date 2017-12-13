<?php       // PHP CODE FOR INCLUDING NAVIGARTION BAR 

function print_navbar()
{
    print('

            
                <div class="nav">

                    <a href="index.php"><img src="images/logo.png" style="display: inline;float:left;"/></a>
                        <ul>
                            <li><a href="home.php"><strong>Home</strong></a></li>
                            <li><strong><a href="about.php">About</a></strong></li>
                            <li><strong><a href="contact.php">Contact</a></strong></li>
                            <li><strong><a href="rankingTable.php">High Score</a></strong></li>
                            <li><strong><a href="#" onclick="logout()">Log out</a></strong></li>
                        </ul>
                        
                </div> <!-- End of Nav-->

 
    ');
}

