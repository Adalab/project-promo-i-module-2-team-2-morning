"use strict";
//Constantes globales
const userName = document.querySelector(".js-input-name");
const userJob = document.querySelector(".js-input-job");
const userMail = document.querySelector(".js-input-mail");
const userPhone = document.querySelector(".js-input-phone");
const userLinkedin = document.querySelector(".js-input-linkedin");
const userGithub = document.querySelector(".js-input-github");
//constante fr para leer archivo de img
const fr = new FileReader();
const uploadBtn = document.querySelector(".js-btn-img");
const fileField = document.querySelector(".js__profile-upload-btn");
const profileImage = document.querySelector(".photo");
const profilePreview = document.querySelector(".js-preview");
const showName = document.querySelector(".layout__title");
const showJob = document.querySelector(".layout__text");
const iconMail = document.querySelector(".js-mail-icon");
const iconPhone = document.querySelector(".js-phone-icon");
const iconLinkedin = document.querySelector(".js-linkedin-icon");
const iconGithub = document.querySelector(".js-github-icon");
const marginCard = document.querySelector(".showroom-card__texts");
const icons = document.querySelectorAll(".icon");
const borderIcons = document.querySelectorAll(".media-icon");
const resetButton = document.querySelector(".reset-button");

//Funciones para obtener datos de usuario

function getUserName() {
  showName.innerHTML = userName.value;
}

function getUserJob() {
  showJob.innerHTML = userJob.value;
}

function showMail() {
  iconMail.href = "mailto:" + userMail.value;
}

function showPhone() {
  iconPhone.href = "tel:" + userPhone.value;
}

function showLinkedin() {
  iconLinkedin.href = userLinkedin.value;
}

function showGithub() {
  iconGithub.href = userGithub.value;
}

function getImage(e) {
  var myFile = e.currentTarget.files[0];

  fr.addEventListener("load", writeImage);
  fr.readAsDataURL(myFile);
}

function writeImage() {
  /* En la propiedad `result` de nuestro FR se almacena el resultado
   */
  profileImage.src = `${fr.result}`;
  profilePreview.style.backgroundImage = `url(${fr.result})`;
}
function fakeFileClick() {
  fileField.click();
}

userName.addEventListener("keyup", getUserName);
userJob.addEventListener("keyup", getUserJob);
userMail.addEventListener("keyup", showMail);
userPhone.addEventListener("keyup", showPhone);
userLinkedin.addEventListener("keyup", showLinkedin);
userGithub.addEventListener("keyup", showGithub);

uploadBtn.addEventListener("click", fakeFileClick);
fileField.addEventListener("change", getImage);

//function collapsable
const collapsableTrigger = document.querySelectorAll(".collapsable-header");

function collapsable(e) {
  const parentEventArrow = e.currentTarget.parentElement;
  if (!parentEventArrow.classList.contains("collapsable-close")) {
    parentEventArrow.classList.add("collapsable-close");
  } else {
    for (const item of collapsableTrigger) {
      item.parentElement.classList.add("collapsable-close");
    }
    parentEventArrow.classList.remove("collapsable-close");
  }
}
for (const trigger of collapsableTrigger) {
  trigger.addEventListener("click", collapsable);
}

// PALETAS

let palettes = [
  {
    name: "paleta1",
    primaryColor: "#114E4E",
    secondaryColor: "#438792",
    tertiaryColor: "#A2DEAF",
    id: "1"
  },
  {
    name: "paleta2",
    primaryColor: "#420101",
    secondaryColor: "#BD1010",
    tertiaryColor: "#E95626",
    id: "2"
  },
  {
    name: "paleta3",
    primaryColor: "#3E5B65",
    secondaryColor: "#EAB052",
    tertiaryColor: "#A0C0CF",
    id: "3"
  }
];

const buttonRadio = document.querySelectorAll(".js-radio");

for (let i = 0; i < buttonRadio.length; i++) {
  buttonRadio[i].addEventListener("click", listenToPalette);
  buttonRadio[i].value = i + 1;
}

function listenToPalette(ev) {
  let paletteClicked = ev.currentTarget;
  let paletteClickedId = paletteClicked.value;

  paintClickedPalette(paletteClickedId);
}

function paintClickedPalette(paletteClickedId) {
  for (const palette of palettes) {
    if (paletteClickedId === palette.id) {
      showName.style.color = palette.primaryColor;
      marginCard.style.borderLeftColor = palette.secondaryColor;
      for (const icon of icons) {
        icon.style.color = palette.primaryColor;
      }
      for (const borderIcon of borderIcons) {
        borderIcon.style.borderColor = palette.tertiaryColor;
      }
    }
  }
}

// RESET BUTTON

function resetInfo() {}

resetButton.addEventListener("click", resetInfo);
