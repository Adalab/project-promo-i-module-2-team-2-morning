'use strict';
//Constantes globales
const userName = document.querySelector('.js-input-name');
const userJob = document.querySelector('.js-input-job');
const userMail = document.querySelector('.js-input-mail');
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
  const userMail = document.querySelector('.js-mail-icon');
  userMail.href = 'mailto:' + userMail.value;
}

userName.addEventListener('keyup', getUserName);
userJob.addEventListener('keyup', getUserJob);
userMail.addEventListener('keyup', showMail);
