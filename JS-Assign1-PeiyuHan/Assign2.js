var userteam;
var username;


userteam = prompt("Which team number you belong to?");
console.log(userteam);
console.log(typeof userteam);

if(isNaN(userteam) === true){
    alert("You are denied access.");
} else {
    
    if(userteam != 5){
        alert("Acess denied!");
    } else { 
        username = prompt("What is your first name?");
        console.log(username);
        if(username  === "Kexin"){
            alert("Welcome " + username + " Sun");
        } else if (username === "Audrey"){
            alert("Welcome " + username + " Chung");
        } else if (username === "Ken"){
            alert("Welcome " + username + " Sze")
        } else if (username === "Tommie"){
            alert("Welcome " + username + " Tong");
        } else {
            alert("Sorry wrong name, Access denied!")
        }
        
    }
}

