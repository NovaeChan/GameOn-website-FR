//Store all input and form 
const form = document.querySelector("form");

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
birthdate.addEventListener("focusout", verifyBirthdate);
quantity.addEventListener("keyup", verifyQuantity);
checkbox1.addEventListener("change", verifyCheckbox);

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if(formValidation()){
        console.log("Formulaire validé");
    }
    else {
        console.log("Formulaire non valide");
    }
})

function formValidation(){
    let first = verifyFirstName();
    let last = verifyLastName();
    let mail = verifyMail();
    // let birthdate = verifyBirthdate();
    let quantity = verifyQuantity();
    let checkbox1 = verifyCheckbox();
    if(first && last && mail && quantity && checkbox1){
        return true;
    }
    return false;
}

//
//
// FAUT IL VERIF AU CAS OU IL Y A UN ESPACE ? 
//
//

//Methods to check if inputs are valid
function verifyFirstName(){
    //Get the parent of the input firstName
    const parent = firstName.parentNode;
    //Then try to find the span inside the parent node
    const displayError = parent.querySelector('span');
    if(firstName.value.length < 2){
        //Add a text error into the span
        displayError.textContent = "Il faut au moins deux caractères pour le prénom";
        firstName.style.border = inputWrong;
        return false;
    }
    displayError.textContent="";
    firstName.style.border = inputGood;
    return true;
}

function verifyLastName(){
    //Get the parent of the input firstName
    const parent = lastName.parentNode;
    //Then try to find the span inside the parent node
    const displayError = parent.querySelector('span');
    if(lastName.value.length < 2 ){
        //Ad a text error
        displayError.textContent = "Il faut au moins deux caractères pour le nom de famille";
        lastName.style.border = inputWrong;
        return false;
    }
    displayError.textContent="";
    lastName.style.border = inputGood;
    return true;
}

function verifyMail(){
    //Get the parent of the input firstName
    const parent = mail.parentNode;
    //Then try to find the span inside the parent node
    const displayError = parent.querySelector('span');
    if(!mail.value.match(regexMail)){
        //Add a text error
        displayError.textContent = "L'adresse mail n'est pas valide";
        mail.style.border = inputWrong;
        return false;
    }
    displayError.textContent="";
    mail.style.border = inputGood;
    return true;
}

function verifyBirthdate(){
    const parent = birthdate.parentNode;
    const displayError = parent.querySelector('span');
    if(!birthdate.value){
        displayError.textContent = "Ce n'est pas une date de naissance valide";
        birthdate.style.border = inputWrong;
    }
    else{
        displayError.textContent = "";
        birthdate.style.border = inputGood;
        console.log("C'est bien une date");

    }
}

function verifyQuantity(){
    //Get the parent of the input firstName
    const parent = quantity.parentNode;
    //Then try to find the span inside the parent node
    const displayError = parent.querySelector('span');
    if(quantity.value.length === 0 || Number.isInteger(quantity.value)){
        //And lastly add a text error
        displayError.textContent = "Ce champ ne peut pas être vide et/ou ne doit contenir que des chiffres";
        quantity.style.border = inputWrong;
        return false;
    }
    displayError.textContent="";
    quantity.style.border = inputGood;
    return true;
}

function verifyCheckbox(){
    //Get the parent of the input firstName
    const parent = checkbox1.parentNode;
    //Then try to find the span inside the parent node
    const displayError = parent.querySelector('.error');
    if(checkbox1.checked == false){
        //And lastly add a text error
        displayError.textContent = "Vous devez accepter les conditions d'utilisation";
        return false;
    }
    displayError.textContent="";
    return true;
}