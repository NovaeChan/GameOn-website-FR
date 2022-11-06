function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const close = document.querySelectorAll('.close');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//Add an event listener to the close button x
close.forEach((btn) => btn.addEventListener("click", closeModal));

//Make the modal not visible
function closeModal() {
  modalbg.style.display = "none";
}


const formToHide = document.getElementsByName("reserve");
const modalBody = document.getElementsByClassName('modal-body');

//Display a confirmation message after validation of form
function displayModalSubmitOk() {
  formToHide.forEach(element => {
    element.style.display = "none";
  });
  let validateBlock = document.createElement('div');
  validateBlock.classList.add("blockValidated");
  validateBlock.innerHTML = '<span class=formValidated>Merci pour<br> votre inscription</span><br> <button class="btn-submit buttonFormValidated" id="buttonFormValidated">Fermer</button>';
  modalBody[0].appendChild(validateBlock);
  buttonFormValidated.addEventListener("click", closeModal);

}

