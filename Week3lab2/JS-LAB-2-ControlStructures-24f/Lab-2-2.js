//######## LAB 2-2 LOGIN ########
//1. LINK THIS JS FILE TO THE HTML FILE
//alert("hey 2.2");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE

//====VARIABLES===============
//2. CREATE NECESSARY VARIABLES

	var username = "dart";// Correct user name
	var password = "vader";// Correct password
	var inputuser 	// user name input
	var inputpw // password input



//====LOGIC===================
//3. CREATE POPUP BOX FOR USERNAME
 inputuser = prompt("Please input your username");
//4. OUTPUT PROVIDED USERNAME TO JS CONSOLE
console.log(inputuser);
//5. CREATE POPUP BOX FOR PASSWORD
inputpw = prompt("Please input your password");	
//6. OUTPUT PROVIDED PASSWORD TO JS CONSOLE
console.log(inputpw);
//7. CHECK IF PROVIDED USERNAME AND PROVIDED PASSWORD MATCH THE STORED USERNAME/PASSWORD
if (inputuser === username && inputpw === password){

//8. IF THEY MATCH, POPUP SUCCESS MESSAGE AND OUTPUT TO CONSOLE
alert ("Welcome back " + username);

console.log("Login successful");


//9. IF THEY DON'T MATCH, POPUP INVALID MESSAGE & OUTPUT TO CONSOLE
} else {
	alert("Invalid username/password");
	console.log("Login Fail");
}
