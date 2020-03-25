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

//saco a global las constantes de los elementos a pintar
const showName = document.querySelector('.layout__title');
const showJob = document.querySelector('.layout__text');
const iconLinkedin = document.querySelector('.js-linkedin-icon');
let iconsMedia = document.querySelectorAll('.media-icon');
const iconFas = document.querySelector('.fas');
let iconFab = document.querySelectorAll('.fab');
const iconFar = document.querySelector('.fa-envelope');
const borderLeftCard = document.querySelector('.showroom-card__texts');
const iconMail = document.querySelector('.js-mail-icon');
const iconGithub = document.querySelector('.js-github-icon');
const iconPhone = document.querySelector('.js-phone-icon');
//ros-labels colores
let labelPalettes = document.querySelectorAll('.js-label');

//ros-creo un array con las paletas
const palettes = [
  {
    id: '1',
    name: 'palette1',
    colorPrimary: '#114e4e',
    colorSecundary: '#438792',
    colorThird: '#a2deaf'
  },
  {
    id: '2',
    name: 'palette2',
    colorPrimary: '#420101',
    colorSecundary: '#bd1010',
    colorThird: '#e95626'
  },
  {
    id: '3',
    name: 'palette3',
    colorPrimary: '#3e5b65',
    colorSecundary: '#eab052',
    colorThird: '#a0c0cf'
  }
];
//objeto persona para añadir datos
let userInfoCard = {
  palette: palettes[0],
  name: '',
  job: '',
  phone: 555 - 55 - 55,
  email: '',
  linkedin: '',
  github: '',
  photo: ''
};

//function paint html palette colors
function paintHtmlPaletteDefault() {
  for (const label of labelPalettes) {
    let liLabel = label.querySelectorAll('.js-li');
    for (const palette of palettes) {
      if (label.classList.contains(palette.name)) {
        liLabel[0].style.backgroundColor = palette.colorPrimary;
        liLabel[1].style.backgroundColor = palette.colorSecundary;
        liLabel[2].style.backgroundColor = palette.colorThird;
      }
    }
  }
}
//funcion obtener el check de los inputs
let inputsRadio = document.querySelectorAll('.js-radio');
inputsRadio[0].setAttribute('checked', true);
for (const inputRadio of inputsRadio) {
  inputRadio.addEventListener('click', paintCheckRadio);
}

function paintCheckRadio(ev) {
  let inputSelect = ev.currentTarget;
  let inputValue = inputSelect.value;
  for (const palette of palettes) {
    if (inputValue === palette.id) {
      showName.style.color = palette.colorPrimary;
      showJob.style.color = palette.colorSecundary;
      for (const liIcon of iconsMedia) {
        liIcon.style.borderColor = palette.colorSecundary;
      }
      iconFas.style.color = palette.colorPrimary;
      for (const icon of iconFab) {
        icon.style.color = palette.colorPrimary;
      }
      iconFar.style.color = palette.colorPrimary;
      borderLeftCard.style.borderLeftColor = palette.colorSecundary;
      userInfoCard.palette = palette;
      setlocalStorageInfo();
    }
  }
}
//function paint Html

//Funciones para obtener datos de usuario
function getUserName() {
  /* const showName = document.querySelector('.layout__title'); */
  showName.innerHTML = userName.value;
  userInfoCard.name = userName.value;
  setlocalStorageInfo();
}

function getUserJob() {
  /* const showJob = document.querySelector('.layout__text'); */
  showJob.innerHTML = userJob.value;
  userInfoCard.job = userJob.value;
  setlocalStorageInfo();
}

function showMail() {
  /* const iconMail = document.querySelector('.js-mail-icon'); */
  iconMail.href = 'mailto:' + userMail.value;
  userInfoCard.email = userMail.value;
  setlocalStorageInfo();
}

function showPhone() {
  iconPhone.href = 'tel:' + userPhone.value;
  userInfoCard.phone = userPhone.value;
  setlocalStorageInfo();
}

function showLinkedin() {
  iconLinkedin.href = 'https://www.' + userLinkedin.value;
  userInfoCard.linkedin = userLinkedin.value;
  setlocalStorageInfo();
}

function showGithub() {
  iconGithub.href = 'https://github.com/' + userGithub.value;
  userInfoCard.github = userGithub.value;
  setlocalStorageInfo();
}

function getImage(e) {
  var myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}
/* En la propiedad `result` de nuestro FR se almacena el resultado
 */
function writeImage() {
  profileImage.src = `${fr.result}`;
  profilePreview.style.backgroundImage = `url(${fr.result})`;
  userInfoCard.photo = fr.result;
  setlocalStorageInfo();
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

//function collapsable
const collapsableTrigger = document.querySelectorAll('.collapsable-header');

function collapsable(e) {
  const parentEventArrow = e.currentTarget.parentElement;
  if (!parentEventArrow.classList.contains('collapsable-close')) {
    parentEventArrow.classList.add('collapsable-close');
  } else {
    for (const item of collapsableTrigger) {
      item.parentElement.classList.add('collapsable-close');
    }
    parentEventArrow.classList.remove('collapsable-close');
  }
}
for (const trigger of collapsableTrigger) {
  trigger.addEventListener('click', collapsable);
}
//function localStorage
function setlocalStorageInfo() {
  localStorage.setItem('userInfoCard', JSON.stringify(userInfoCard));
}

function getlocalStorageInfo() {
  let itemLocalStorage = localStorage.getItem('userInfoCard');
  if (itemLocalStorage !== null) {
    userInfoCard = JSON.parse(itemLocalStorage);
    paintLocalStorage();
  }
}

//function paint User in Local Storage

function paintLocalStorage() {
  //name
  showName.innerHTML = userInfoCard.name;
  userName.value = userInfoCard.name;
  showName.style.color = userInfoCard.palette.colorPrimary;
  //job
  userJob.value = userInfoCard.job;
  showJob.innerHTML = userJob.value;
  showName.style.color = userInfoCard.palette.colorSecundary;
  //img
  profilePreview.style.backgroundImage = `url(${userInfoCard.photo})`;
  profileImage.src = userInfoCard.photo;
  //email
  userMail.value = userInfoCard.email;
  iconMail.href = 'mailto:' + userInfoCard.email;
  //phone
  userPhone.value = userInfoCard.phone;
  iconPhone.href = 'tel:' + userInfoCard.phone;
  //linkendin
  userLinkedin.value = userInfoCard.linkedin;
  iconLinkedin.href = 'https://www.' + userInfoCard.linkedin;
  //gtihub
  userGithub.value = userInfoCard.github;
  iconGithub.href = 'https://github.com/' + userInfoCard.github;
  //styles icons
  iconFar.style.color = userInfoCard.palette.colorPrimary;
  borderLeftCard.style.borderLeftColor = userInfoCard.palette.colorSecundary;
  iconFas.style.color = userInfoCard.palette.colorPrimary;
  for (const liIcon of iconsMedia) {
    liIcon.style.borderColor = userInfoCard.palette.colorSecundary;
  }
  for (const icon of iconFab) {
    icon.style.color = userInfoCard.palette.colorPrimary;
  }
  //poner a estado check el input radio
  for (const inputRadio of inputsRadio) {
    if (userInfoCard.palette.id === inputRadio.value) {
      inputRadio.setAttribute('checked', true);
    }
  }
}
paintHtmlPaletteDefault();
getlocalStorageInfo();
