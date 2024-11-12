//LAB 3 - ARRAYS & LOOPS - PART 3

//PART 3 - SHOPPING CART SHIPPING
//==== VARIABLES ========

var cartPrice = [];
var total = 0;
//==== LOGIC ========
//CHECK FOR ITEMS UNTIL THRESHOLD IS MET.

	while(total < 35){

	//GET ITEM COST FROM USER
	
	itemPrice = prompt("what's the value of your new item?");
	if (itemPrice === null){
		alert("Okay, no more items");
		break;}
	console.log(itemPrice);

	//CONVERT USER INPUT TO A NUMBER
	var stringToNum = parseInt(itemPrice);
	console.log(stringToNum);

	//ADD ITEM COST TO RUNNING TOTAL VARIABLE
	total = total + stringToNum;
	console.log(total);

	//PUSH ITEM COST TO CART ARRAY
	cartPrice.push(stringToNum);
	console.log(cartPrice);
	
}
	
//SEND POPUP MESSAGE TO USER

	alert("Your shipping for this order will be free!");

//SEND OUTPUT TO CONSOLE
	console.log("item price: $"+cartPrice.join("|$"));
	alert("total: $"+total);