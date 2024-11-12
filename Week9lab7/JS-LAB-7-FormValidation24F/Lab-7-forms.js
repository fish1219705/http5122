/* LAB 7 - SHIPPING FORM */
//Order Shipping object (for extra EXTRA challenge, otherwise, ignore it)
var shipInfo = {
	cid: 0,
	name: "",
	pc: "",
	speed: "",
	cost: 0
};


window.onload = function(){
	var formHandle = document.forms.form_ship;
	formHandle.onsubmit = submitForm;
	function submitForm(){
		
	var myForm = document.getElementById("shippingForm");
	var thankyouMsg = document.getElementById("thanks_msg");

	var shipName = formHandle.f_Name;
	var shipPc= formHandle.f_pc;
	var deliver = formHandle.f_speed;
	var deliverMethod = deliver.options[deliver.selectedIndex].text;

	console.log (shipName.value);
	console.log (shipPc.value);
	console.log (deliver.value);

	if (deliver.value === "0"){
		var dlvInput = document.getElementById("in_Speed");
		dlvInput.style.background = "red";
		deliver.focus();
		return false;
	}

	if (shipName.value === "" ) {
	var nameInput = document.getElementById("in_Name");
	nameInput.style.background = "red";
	shipName.focus();
	return false;
	} 

	if (shipPc.value === "" ) {
	var PcInput = document.getElementById("in_pc");
	PcInput.style.background = "red";
	shipPc.focus();
	return false;
	} 



	myForm.style.display = "none";
	thankyouMsg.style.display = "block";

	var cus = document.getElementById("thanksCustomer");
	var del = document.getElementById("thanksSpeed");
	var pc = document.getElementById("thanksPC");
	var delCost = document.getElementById("thanksCost");

	cus.innerHTML = shipName.value;
	del.innerHTML = deliverMethod;
	pc.innerHTML = shipPc.value;
	delCost.innerHTML = deliver.value;

	shipInfo.name = shipName.value;
	shipInfo.pc = shipPc.value;
	shipInfo.speed = deliverMethod;
	shipInfo.cost = deliver.value;
	console.log(shipInfo);

	return false;

	}

	

	
}

