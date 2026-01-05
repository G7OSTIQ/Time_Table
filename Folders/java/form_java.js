function validation(){

    let error = "";

    let firstname = document.getElementById("username");
    if(firstname == ""){
        error = error + "<li> Please enter First Name</li>"
    }


    let lastname = document.getElementById("surname");
    if(lastname == ""){
        error = error + "<li> Please enter Surname Name</li>"
    }


    

    let age = document.getElementsByTagName("age"); //age was a list from html
    let ageseleced = false;

    for(let i = 0; i < age.length; i++){ //lenght means it will count the list
        if(age[i].checked){
            ageseleced = true;
        }
    }

    if(!ageseleced){
        error = error + "<li> Please select an age</li>"
    }

    if(error != ""){
        document.getElementById("errorList").innerHTML = error;
        document.getElementById("errorDiv").classList.remove("hidden");
        return false; //closes the mail
    }
    else{
        document.getElementById("errorList").innerHTML = "";
        document.getElementById("errorDiv").classList.add("hidden");
        return true; //opens the mail
    }

}