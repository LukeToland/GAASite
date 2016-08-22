  window.onload=function(){
	//startTime();
}


	
	var sec = 0; var min = 0; var hour = 0; 
	function stopwatch(text) { 
		sec++; 
		if (sec == 60) 
		{ 
			sec = 0; min = min + 1;
		} else
	 	{ 
	 		min = min; 
	 	} 

	 	if (sec<=9) 
	 	{ 
	 		sec = "0" + sec; 
	 	} 

	 	document.getElementById('time').innerHTML =  ((min<=9) ? "0" + min : min) + " : " + sec; 

	 // 	if (text == "Start") 
		// { 
		// 	document.clock.theButton.value = "Stop "; 
		// } 

		// if (text == "Stop ") { 
		// 	document.clock.theButton.value = "Start"; 
		// } 

		// if (document.clock.theButton.value == "Start") {
		// 	window.clearTimeout(SD); return true; 
		// } 

		SD=window.setTimeout("stopwatch();", 1000); 
	} 

		

  	function startTime()
	{
		var today=new Date();
		var h=today.getHours();
		var m=today.getMinutes();
		var s=today.getSeconds();
		
		
		document.getElementById('time').innerHTML=h+":"+m+":"+s;
		t=setTimeout(function(){startTime()},500);
	}