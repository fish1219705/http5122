/* LAB 8-1 - FINAL COUNTDOWN!! */


//create page load listener
window.onload = now;

//create page load function
function now(){
	
	//create variables for required HTML elements
	var today = document.getElementById("todayData");
	var final = document.getElementById("finalData");
	var due = document.getElementById("dueData");
	var count = document.getElementById("countMsg");
	//create variables for now date and due date
	var dateNow = new Date();
	var dateString = dateNow.toDateString();
	var dueDate = new Date("December 13, 2023 18:00:00");
	var dueString = dueDate.toDateString();
	var dateNowInt = dateNow.getTime();
	var dueDateInt = dueDate.getTime();
	var timeDif = dueDateInt - dateNowInt;
	var DayDif = timeDif / 86400000;
	var fullDays = Math.floor(DayDif)
	
	today.innerHTML = dateString;
	final.innerHTML = dueString;

	if(fullDays <= 0){
		count.innerHTML = "The Deadline for the Final Assignment has passed!"
	} else {
		due.innerHTML = fullDays
	};

}
	//OUTPUT NOW DATE & DUE DATE TO HTML PAGE
	
	//CONVERT TO UTC AND SUBTRACT TO GET TIME DIFFERENCE
	
	//CONVERT TIME DIFFERENCE TO WHOLE NUMBER OF DAYS
		
	//LOGIC TO CHECK IF DUE DATE HAS PASSED, AND OUPUT APPROPRIATE MESSAGE TO HTML PAGE