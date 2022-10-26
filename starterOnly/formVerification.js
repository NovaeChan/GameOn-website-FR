//Store all input and form 
const form = document.getElementsByClassName("form");

const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const mail = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
// const location = document.getElementById("location");
const checkbox1 = document.getElementById("checkbox1");

//Colors input border;
const inputWrong = "3px solid #f7483b";
const inputGood = "3px solid #52ff7d";
//Regex for email check
const regexMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

//Adding event listener to all inputs
firstName.addEventListener("keyup", verifyFirstName);
lastName.addEventListener("keyup", verifyLastName);
mail.addEventListener("keyup", verifyMail);
birthdate.addEventListener("keyup", verifyBirthdate);
quantity.addEventListener("keyup", verifyQuantity);
checkbox1.addEventListener("change", verifyCheckbox);


//Methods to check if inputs are valid
function verifyFirstName(){
    if(firstName.value.length < 2){
        //Message d'erreur ici 
        firstName.style.border = inputWrong;
        return false;
    }
    firstName.style.border = inputGood;
    console.log("First name ok");
    return true;
}

function verifyLastName(){
    if(lastName.value.length < 2 ){
        lastName.style.border = inputWrong;
        return false;
    }
    lastName.style.border = inputGood;
    return true;
}

function verifyMail(){
    if(!mail.value.match(regexMail)){
        mail.style.border = inputWrong;
        return false;
    }
    mail.style.border = inputGood;
    return true;
}

function verifyBirthdate(){
    console.log("Fonction de vérification de la date de naissance à faire");
}

function verifyQuantity(){
    if(quantity.value.length === 0 || Number.isInteger(quantity.value)){
        quantity.style.border = inputWrong;
        return false;
    }
    quantity.style.border = inputGood;
    return true;
}

function verifyCheckbox(){
    if(checkbox1.checked == false){
        return false;
    }
    return true;
}


console.log(form);
