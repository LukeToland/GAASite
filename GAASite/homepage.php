<!DOCTYPE html>
<html lang="en">

<head>
	<title>GAA 2015</title>
	<meta charset="utf-8"/>
	<script src="jquery-1.11.0.js"></script>
	<script type="text/javascript" src="js/jquery-2.0.2.min.js"></script>
	<script type="text/javascript" src="js/homepage.js"></script>
	<script type="text/javascript" src="js/jquery.cycle2.min.js"></script>
	<script type="text/javascript" src="js/jquery.cycle2.caption2.min.js"></script>

	<link rel="stylesheet" href="home.css" type="text/css"/>

</head>

<body class="body">

	
	<div id="nav">
		<div id="logo">
  
       		<img src="images/sponsors/gaa.jpg"></img>
  
   		</div>
    	<div id="main_nav">

        <ul>
            <li><a href="archives.html">Home</a></li>
            <li><a href="#">Archive</a></li>
            <li><a href="#">Tables</a></li>
            <li><a href="#">Feeds</a></li>
        </ul>
    </div>
	</div>
	<div class="wrapper">
		<div class="cycle-slideshow" 
		    data-cycle-fx=scrollHorz
		    data-cycle-timeout=4000
		    data-cycle-pager-event="mouseover"
		    data-cycle-caption-plugin=caption2
		    data-cycle-caption-fx-out='slideUp'
		    data-cycle-caption-fx-in='slideDown'
		    data-cycle-overlay-fx-out="slideUp"
		    data-cycle-overlay-fx-in="slideDown"
		    >
		    <!-- prev/next links -->
		    <div class="cycle-prev"></div>
		    <div class="cycle-next"></div>
		    <!-- Pager -->
		    <div class="cycle-pager"></div>
		    <!-- Caption -->
		    <div class="cycle-caption"></div>
		    <!-- Caption OVERLAY -->
		    <div class="cycle-overlay"></div>
		    
		    <img src="images/sponsors/1.jpeg"  data-cycle-desc="Liberty Insurance">
		    <img src="images/sponsors/2.jpg" data-cycle-desc="ARI">
		    <img src="images/sponsors/3.png"  data-cycle-desc="Bank of Ireland">
		</div>


	</div>	



	<div id="par">
    	<div id="content">
        	<h3>Team Selection</h3>
     
        	<tr><td>Select number of teams: </td><td><select name="numDep" id="dropdown">
			    <option value="">Please Select</option>
			    <option value="4">4</option>
			    <option value="6">6</option>
			    <option value="8">8</option></select></td>
			</tr>

			<div id="textboxDiv"></div>

        </p>
    	</div>

    	
	</div>

	<div id="par">
    	<div id="content">
        	<h3>Fixtures</h3>
     
        	
        </p>
    	</div>


    	
	</div>



</body>

</html>

