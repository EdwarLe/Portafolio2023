const hiden = document.getElementById("menu_pleg");
const home = document.getElementById("home")
const main = document.getElementById("main__section")
const about = document.getElementById("aboutMe")
const skills = document.getElementById("skills")
const studies = document.getElementById("formacion")
const experiencia = document.getElementById("experiencia")
const footer = document.getElementById("footer")
const iconMenu = document.getElementById("icon__menu")

hiden.addEventListener('click', () => {
    home.classList.toggle('hide');
    iconMenu.classList.toggle('hide');
    main.classList.toggle('blur__filter');
    about.classList.toggle('blur__filter');
    skills.classList.toggle('blur__filter')
    studies.classList.toggle('blur__filter')
    experiencia.classList.toggle('blur__filter')
    footer.classList.toggle('blur__filter')

})