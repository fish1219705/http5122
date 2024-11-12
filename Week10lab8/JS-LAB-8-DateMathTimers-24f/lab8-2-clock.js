/* LAB 8.2 - STOP TIME */


//create page load listener
window.onload = go;
function go(){
var refresh;
//create page load function
	
function DisplayTime(){

	var hour = document.getElementById("hoursOut");
	var min = document.getElementById("minsOut");
	var sec = document.getElementById("secsOut");
	var nowTime = new Date();
	
	var nowHour = nowTime.getHours();
	var nowMin = nowTime.getMinutes();

	if(nowMin < 10){
		nowMin = "0"+nowMin;
	}

	var nowSec = nowTime.getSeconds();

	if(nowSec < 10){
		nowSec = "0"+nowSec;
	}
	
	hour.innerHTML = nowHour;
	min.innerHTML = ":"+nowMin;
	sec.innerHTML = ":"+nowSec;
	}
	
	function StartClock(){
		refresh = setInterval(DisplayTime, 1000);
	}
	
	//create variables for required HTML elements
	function stopClock(){
		clearInterval(refresh);
	}
	var bStart = document.getElementById("btnStart");
	var bStop = document.getElementById("btnStop");

	bStart.onclick = StartClock;
	bStop.onclick = stopClock;
	
	//create time variable so all functions have access to it
	
	}
	//CREATE FUNCTION THAT DISPLAYS THE TIME
	
	
	//CREATE FUNCTION TO START THE CLOCK.
	
	
	//CREATE FUNCTION TO STOP THE CLOCK
	
	
	// SET EVENT LISTENERS
