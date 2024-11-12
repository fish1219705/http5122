//#### LAB 4 - FUNCTIONS ####
//PART 3:  SAFE DOG WALKING CHECK 


//================== CREATE YOUR checkTemp FUNCTION
//This function's job is to...check if the temperature above 30 or under -10 , return false;if between -10 to 30, return true.
//It needs to receive...the currentTemp parameter and it is a number datatype.
//It will return...a boolean datatype

function checkTemp(currentTemp){
    if(currentTemp > 30 || currentTemp < -10){
        return false;
    } else {
        return true;
    }
}

//================== LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS

var askTemp;
askTemp = prompt("what is current temperature");
if (checkTemp(askTemp) === false){
    alert("Yikes! This is no weather for dog walking!");
} else{
    alert("You're good, have a nice walk!");
}
