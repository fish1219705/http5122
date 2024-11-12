
// 1.Create a custom object
var SelectRole = {
    title:"you guess",
    actor:"Jessica Alba OR Chris Evans",
    superPower:"The Invisible Woman OR The Human Torch",
    company:"Marvel",
    guess: function GuessTitle(){
        var tryguess = prompt("Which movie it is?");
        this.title = tryguess;
        alert("the title is "+ this.title);
        return this.title+" is a nice movie!";
    }
    
}

//2.output object to the console
console.log(SelectRole);

//3. ask for input and update 1st
var up1 = prompt("Which superpower you wanna choose?","The Invisible Woman OR The Human Torch");
SelectRole.superPower = up1;
console.log(SelectRole.superPower);

//4. ask for input and update 2nd
var up2 = prompt("Please pick the actor/actress for the character","Jessica Alba OR Chris Evans");
SelectRole.actor = up2;
console.log(SelectRole.actor);

//5.call the method
console.log(SelectRole.guess());

//6.output object to the console
console.log(SelectRole);