//LAB 3 - ARRAYS & LOOPS - PART 2

var ourTeam = ["Anne","Jason","Felicia","Darren","Elaine"];
//TEAM MEMBER ARRAY

console.log(ourTeam);
//OUTPUT TEAM ARRAY TO JS CONSOLE

ourTeam.pop();
console.log(ourTeam);
//REMOVE LAST MEMBER

ourTeam.unshift("Sean");
console.log(ourTeam);
//ADD SEAN TO FRONT OF ARRAY

var teamAlpha = ourTeam.sort();
console.log(teamAlpha);
//REARRANGE THE ARRAY ALPHABETICALLY

console.log("We have " +ourTeam.length+ " people in our group.");
//OUTPUT REQUIRED MESSAGE TO JS CONSOLE

for (var i = 0; i < ourTeam.length; i++){
    
    console.log(ourTeam[i]+" is # "+ [i+1]);
}
//LOOP THROUGH ARRAY TO OUTPUT TEAM MEMBERS/NUMBERS TO JS CONSOLE

