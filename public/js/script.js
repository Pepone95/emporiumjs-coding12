let body = document.querySelector("body")

// change le site en background Black
let btnBlack = document.getElementById('btnB')
let titre = document.getElementsByTagName('h1')[0]

btnBlack.addEventListener("click", () => {
    body.style.backgroundColor = 'black'
    titre.style.color = 'white'
    body.style.color = 'white'
})
// fin du du bouton Black


// change le site en white
let btnWhite = document.getElementById('btnW')

btnWhite.addEventListener("click", () => {
    body.style.backgroundColor = 'white'
    body.style.color = 'black'
    titre.style.color = 'black'
})
// fin du bouton white


// bouton connexion


let btnconnexion = document.getElementById('btnconnexion');
let connexion = document.getElementById('connexion');

btnconnexion.addEventListener('click', () => {
    connexion.classList.replace('d-none', 'd-block');
})
