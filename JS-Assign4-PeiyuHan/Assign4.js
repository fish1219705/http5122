window.onload = function(){
    var FormHandle = document.forms.ixdForm;
    FormHandle.onsubmit = submitForm;
    function submitForm (){
        var header = document.getElementById("welcome");
        var form = document.getElementById("form");
        var result = document.getElementById("result");
        var sFName = FormHandle.f__fName;
        var sLName = FormHandle.f__lName;
        var sID = FormHandle.f__id;
        var program = FormHandle.f__program;
        var programName = program.options[program.selectedIndex].text;
        var project;

        var radio1 = document.getElementById("in_health");
        var radio2 = document.getElementById("in_esport");
        var radio3 = document.getElementById("in_tutorial");

        var rFName = document.getElementById("result__Fname");
        var rLName = document.getElementById("result__Lname");
        var rID = document.getElementById("result__id");
        var rProgram = document.getElementById("result__program");
        var rProject = document.getElementById("result__project");

        var humberRegex = /N\d{8}/i;
        var idInput = document.getElementById("in_id");

        
        //VALIDATION
        if(sFName.value === ""){
            var sFNameInput = document.getElementById("in_fName");
            sFNameInput.style.background = "red";
            program.focus();
            return false;
        }

        if(sLName.value === ""){
            var sLNameInput = document.getElementById("in_lName");
            sLNameInput.style.background = "red";
            program.focus();
            return false;
        }
        if(sID.value === ""){
            var sIDInput = document.getElementById("in_id");
            sIDInput.style.background = "red";
            program.focus();
            return false;
        }

        //STRETCH GOAL
        if (!humberRegex.test(sID.value)){
            alert("invalid student id!")
            return false;
        } 

        if(program.value === "X"){
            var programInput = document.getElementById("in_program");
            programInput.style.background = "red";
            program.focus();
            return false;
        }
        
        if (radio1.checked){
            project = radio1.value;
        } else if (radio2.checked)
        {
            project = radio2.value;
        } else if (radio3.checked){
            project = radio3.value;
        } else {
            var projectInput = document.getElementById("caption_project");
            projectInput.style.background = "red";
            
            return false;
        }
    

        console.log(sFName.value);
        console.log(sLName.value);
        console.log(sID.value);
        console.log(programName);
        console.log(project);

        //SHOW & HIDE
        header.style.display = "none";
        form.style.display = "none";
        result.style.display = "block";

        //OUTPUT
        rFName.innerHTML = sFName.value;
        rLName.innerHTML = sLName.value;
        rID.innerHTML = sID.value;
        rProgram.innerHTML = programName;
        rProject.innerHTML = project;

        return false;
    }

}