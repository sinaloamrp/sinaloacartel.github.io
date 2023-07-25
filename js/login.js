console.log("JavaScript Loaded");

const loginUsername = document.querySelector(".username")
const loginPassword = document.querySelector(".password")

const username = 'sinaloaMRP'
const password = "aap-sinaloa"

const submit = document.querySelector(".submit");
submit.addEventListener('click', function () {
    if (loginUsername.value == username && loginPassword.value == password) {
        alert('U bent ingelogd')
        bossPage()
    } else {
        alert('Foute gebruikersnaam of wachtwoord!')
    }
})


function bossPage() {
    window.location.href = "boss.html"
}