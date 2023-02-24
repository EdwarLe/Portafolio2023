const btnScrollTop = document.getElementById ("btn_up")

window.addEventListener('load', () => {
    document.getElementById("loader").classList.toggle("loader2")
})

btnScrollTop.addEventListener('click', () => {
    window.scrollTo(0, 0)
});

window.onscroll = () => {
    addBtnScroll()
}

const addBtnScroll = () => {
    if (window.scrollY < 150) {
        btnScrollTop.classList.remove("btn-up-on")
    } else {
        btnScrollTop.classList.add("btn-up-on")
    }
}