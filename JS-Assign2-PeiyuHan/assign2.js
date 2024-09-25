var m1 = "Beauty and the Beast";
var m2 = "Fantastic Four";
var m3 = "Captain America";
var m4 = "Indiana Jones";
var m5 = "National Treasure";
var m6 = "I Am Legend";
var m7 = "Jumanji";
var movies = [m1,m2,m3,m4,m5,m6,m7];


var userpick = prompt("Which top 7 movie would you like?","Pick a number: 1-7");
var picknum = parseInt(userpick);
console.log(picknum);

while(picknum < 1 || picknum > 7 || isNaN(userpick)){
    var picknum = prompt("Please enter a number between 1 and 7!");
}

/*if(picknum < 1 || picknum > 7 || isNaN(userpick)){
    alert("Please enter a number between 1 and 7!");
}else{*/
    var i = picknum;
    alert("Number "+picknum+" on the list is "+movies[i-1]);
    for(i = 0; i <= [movies.length-1];i++){
        console.log("Movie " +[i+1]+": "+movies[i]);
    }


 

