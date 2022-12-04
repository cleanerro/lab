const btn = document.querySelector('.gamburger-btn');
const menu = document.querySelector('.gamburger-menu');
const modalWindow = document.querySelector('.modal-window');
const navBtn = document.querySelector('.nav-btn');

const patientBtn = document.querySelector('#patient');
const providerBtn = document.querySelector('#provider');
const businessBtn = document.querySelector('#business');

const subMenuPatient = document.querySelector('.sub-menu-patient');
const subMenuProvider = document.querySelector('.sub-menu-provider');
const subMenuBusiness = document.querySelector('.sub-menu-business');

const closeBtnPatient = document.querySelector('.button-close-patient')
const closeBtnProvider = document.querySelector('.button-close-provider')
const closeBtnBusiness = document.querySelector('.button-close-business')

const servisesBtn = document.querySelector('#servises-btn')
const aboutBtn = document.querySelector('#about-btn')
const servisesMenu = document.querySelector('.contacts-servises')
const aboutMenu = document.querySelector('.contacts-about')



btn.addEventListener('click', () => {
   modalWindow.classList.remove('modal')
   menu.classList.remove('show')
   document.body.style.overflow = "auto"
})

navBtn.addEventListener('click', () => {
   modalWindow.classList.add('modal')
   menu.classList.add('show')
   document.body.style.overflow = "hidden"
})

patientBtn.addEventListener('click', () => {
   modalWindow.classList.toggle('modal')
   subMenuPatient.classList.toggle('show')
   patientBtn.classList.toggle('active')
   document.body.style.overflow = "hidden"
})


providerBtn.addEventListener('click', () => {
   modalWindow.classList.toggle('modal')
   subMenuProvider.classList.toggle('show')
   providerBtn.classList.toggle('active')
   document.body.style.overflow = "hidden"
})

businessBtn.addEventListener('click', () => {
   modalWindow.classList.toggle('modal')
   subMenuBusiness.classList.toggle('show')
   businessBtn.classList.toggle('active')
   document.body.style.overflow = "hidden"
})

closeBtnPatient.addEventListener('click', () => {
   modalWindow.classList.remove('modal')
   subMenuPatient.classList.remove('show')
   // subMenuBusiness.classList.remove('show')
   // subMenuProvider.classList.remove('show')
   patientBtn.classList.remove('active')
   // providerBtn.classList.remove('active')
   // businessBtn.classList.remove('active')
   document.body.style.overflow = "auto"
})

closeBtnProvider.addEventListener('click', () => {
   modalWindow.classList.remove('modal')
   subMenuProvider.classList.remove('show')
   providerBtn.classList.remove('active')
   document.body.style.overflow = "auto"
})

subMenuBusiness.addEventListener('click', () => {
   modalWindow.classList.remove('modal')
   subMenuBusiness.classList.remove('show')
   businessBtn.classList.remove('active')
   document.body.style.overflow = "auto"
})

servisesBtn.addEventListener('click', () => {
   servisesMenu.classList.toggle('active')
})

aboutBtn.addEventListener('click', () => {
   aboutMenu.classList.toggle('active')
})

