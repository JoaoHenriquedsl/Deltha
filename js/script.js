let dashmenu = document.getElementById('dashmenu')

function toggle(){
    const nav = document.getElementById('nav-links')
    nav.classList.toggle('escondido')
} 

dashmenu.addEventListener('click', toggle)