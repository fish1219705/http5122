//#### LAB 6 - DOM MANIPULATION ####
//PART 2: MYSTERY BOX

//LISTEN FOR load EVENT
window.onload = pageReady;


//'WRAPPER' FUNCTION FOR DOM LOGIC
function pageReady(){
	var b1 = document.getElementById("mysteryBox");
	var b2 = document.getElementById("buttonBox");
	b1.onmouseover = ask;
	//GET DOM ELEMENTS WE'LL NEED


	//====CREATE THE FUNCTIONS WE'LL NEED====
	//FUNCTION TO ASK USER
	function ask(){
		var a = confirm("Do you want to see something?");
		if(a === true){
			change();

			function change(){
				b1.style.display = "none";
				b2.style.display = "block";
				
				b2.onclick = changeSize;
				function changeSize(){
					console.log(b2);
					b2.style.width = "600px";
					b2.style.background = "orange";
					b2.innerHTML = "<h2>SURPRISE!</h2>"; //<h2>Click me...</h2>
				}
			}
		}
	}
}
	//FUNCTION TO CHANGE buttonBox


	//SETUP LISTENERS


//END onload FUNCTION