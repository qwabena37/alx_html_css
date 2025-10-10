const hamburgerDiv = document.getElementById('hamburger-btn')
const menu = document.getElementById('hamburger-menu')

hamburgerDiv.addEventListener('click', (e) => {
    menu.setAttribute("hidden", "");
})