const btnScrollTop = document.getElementById ("btn_up")
const menuOculto = document.getElementById('home')
const menuPlegable = document.getElementById('menu_pleg')

window.addEventListener('load', () => {
    document.getElementById("loader").classList.toggle("loader2")
})

/* Función para subir la página cuando se da click en el botón */

btnScrollTop.addEventListener('click', () => {
    window.scrollTo(0, 0)
});

window.onscroll = () => {
    addBtnScroll();
    showUnderLineMenu()
}

const addBtnScroll = () => {
    if (window.scrollY < 150) {
        btnScrollTop.classList.remove("btn-up-on")
    } else {
        btnScrollTop.classList.add("btn-up-on")
    }
}

/* Función para mostrar el menú plegable */





const showUnderLineMenu = () => {
    if (window.scrollY > 100) {
        menuOculto.classList.add('hide__underline')
    } else {
        menuOculto.classList.remove('hide__underline')
    }
}