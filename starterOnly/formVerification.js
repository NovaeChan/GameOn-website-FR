//Store all input and form
const form = document.querySelector("form");

const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const mail = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");

const locationsBlock = document.getElementById('locations');
const locations = document.getElementsByName("location");
const checkbox1 = document.getElementById("checkbox1");

//Colors input border
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
locationsBlock.addEventListener("change", verifyLocation);

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if(formValidation()){
        displayModalSubmitOk();
    }
})

function formValidation(){
    let first = verifyFirstName();
    let last = verifyLastName();
    let mail = verifyMail();
    let birthdate = verifyBirthdate();
    let quantity = verifyQuantity();
    let locations = verifyLocation();
    let checkbox1 = verifyCheckbox();
    if(first && last && mail && birthdate && quantity && locations && checkbox1){
        return true;
    }
    return false;
}

//
//
// RETIRER LES ESPACES A LA FIN 
//
//

//Methods to check if inputs are valid
function verifyFirstName(){
    //Get the parent of the input firstName
    const parent = firstName.parentNode;
    //Then try to find the span inside the parent node
    const displayError = parent.querySelector('span');
    if(firstName.value.trim().length < 2){
        //Add a text error into the span
        displayError.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
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
    if(lastName.value.trim().length < 2 ){
        //Ad a text error
        displayError.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom";
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
        displayError.textContent = "Vous devez entrer votre date de naissance.";
        birthdate.style.border = inputWrong;
        return false;
    }
    else{
        displayError.textContent = "";
        birthdate.style.border = inputGood;
        return true
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
        displayError.textContent = "Vous devez accepter les termes et conditions.";
        return false;
    }
    displayError.textContent="";
    return true;
}

function verifyLocation(){
    const displayError = locationsBlock.querySelector(".error");
    for(let i = 0; i < locations.length; i++){
        if(locations[i].checked){
            displayError.textContent = "";
            return true;
        }
    }
    displayError.textContent = "Vous devez choisir une option";
    return false;
}