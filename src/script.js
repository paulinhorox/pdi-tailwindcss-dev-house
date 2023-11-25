const menuMobile = document.getElementById('menu')

function openMenu() {
menuMobile.classList.replace('hidden', 'flex')
}

function closeMenu() {
    menuMobile.classList.replace('flex', 'hidden')
}