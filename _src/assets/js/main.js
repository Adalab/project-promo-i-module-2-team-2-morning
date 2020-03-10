'use strict';
//Constantes globales
const userName = document.querySelector('.js-input-name');
const userJob = document.querySelector('.js-input-job');
const userMail = document.querySelector('.js-input-mail');
const userPhone = document.querySelector('.js-input-phone');
const userLinkedin = document.querySelector('.js-input-linkedin');
const userGithub = document.querySelector('.js-input-github');
//constante fr para leer archivo de img
const fr = new FileReader();
const uploadBtn = document.querySelector('.js-btn-img');
const fileField = document.querySelector('.js__profile-upload-btn');
const profileImage = document.querySelector('.photo');
const profilePreview = document.querySelector('.js-preview');

//Funciones para obtener datos de usuario
function getUserName() {
  const showName = document.querySelector('.layout__title');
  showName.innerHTML = userName.value;
}

function getUserJob() {
  const showJob = document.querySelector('.layout__text');
  showJob.innerHTML = userJob.value;
}

function showMail() {
  const iconMail = document.querySelector('.js-mail-icon');
  iconMail.href = 'mailto:' + userMail.value;
}

function showPhone() {
  const iconPhone = document.querySelector('.js-phone-icon');
  iconPhone.href = 'tel:' + userPhone.value;
}

function showLinkedin() {
  const iconLinkedin = document.querySelector('.js-linkedin-icon');
  iconLinkedin.href = userLinkedin.value;
}

function showGithub() {
  const iconGithub = document.querySelector('.js-github-icon');
  iconGithub.href = userGithub.value;
}
//funcion upload img
function getImage(e) {
  var myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
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

userName.addEventListener('keyup', getUserName);
userJob.addEventListener('keyup', getUserJob);
userMail.addEventListener('keyup', showMail);
userPhone.addEventListener('keyup', showPhone);
userLinkedin.addEventListener('keyup', showLinkedin);
userGithub.addEventListener('keyup', showGithub);

uploadBtn.addEventListener('click', fakeFileClick);
fileField.addEventListener('change', getImage);
