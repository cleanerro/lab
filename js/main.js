const gmbBtn = document.querySelector('.gamburger-btn');
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







gmbBtn.addEventListener('click', () => {
   modalWindow.classList.remove('modal')
   menu.classList.remove('show')
   document.body.style.overflow = "auto"
})

navBtn.addEventListener('click', () => {
   modalWindow.classList.add('modal')
   menu.classList.add('show')
   document.body.style.overflow = "hidden"
})


const menuToggle = (subMenu, btn) => {
   modalWindow.classList.toggle('modal')
   subMenu.classList.toggle('show')
   btn.classList.toggle('active')
   document.body.style.overflow = "hidden"
}

patientBtn.addEventListener('click', () => {
   menuToggle(subMenuPatient, subMenuPatient)
})

providerBtn.addEventListener('click', () => {
   menuToggle(subMenuProvider, providerBtn)
})

businessBtn.addEventListener('click', () => {
   menuToggle(subMenuBusiness, businessBtn)
})



const closeBtn = (subMenu, btn) => {
   modalWindow.classList.remove('modal')
   subMenu.classList.remove('show')
   btn.classList.remove('active')
   document.body.style.overflow = "auto"
}



closeBtnPatient.addEventListener('click', () => {
   closeBtn (subMenuPatient, patientBtn)
})

closeBtnProvider.addEventListener('click', () => {
   closeBtn (subMenuProvider, providerBtn)
})

closeBtnBusiness.addEventListener('click', () => {
   closeBtn (subMenuBusiness, businessBtn)
})

servisesBtn.addEventListener('click', () => {
   servisesMenu.classList.toggle('active')
})

aboutBtn.addEventListener('click', () => {
   aboutMenu.classList.toggle('active')
})


document.querySelectorAll('.sub-menu-item').forEach(n => n.addEventListener('click', () => {
   closeBtn (subMenuPatient, patientBtn)
   closeBtn (subMenuProvider, providerBtn)
   closeBtn (subMenuBusiness, businessBtn)

} ))

