//#### LAB 4 - FUNCTIONS ####
//PART 2:  AN AVERAGE FUNCTION


//################## CREATE YOUR AVERAGE FUNCTION
//This function takes five numbers and returns their average to one decimal place.
function aveNum(num1,num2,num3,num4,num5){
    var ave = (num1 + num2 + num3 + num4 + num5)/5;
    var result = ave.toFixed(1);
    console.log(result);
    return result;
    
}

aveNum(5,10,15,20,25);


//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS

var g1 = 70;
var g2 = 88;
var g3 = 67;
var g4 = 66;
var g5 = 66;

    if(aveNum(g1,g2,g3,g4,g5)>= 70){
    alert("Success");
    } else {
    alert("Review required");
} 




