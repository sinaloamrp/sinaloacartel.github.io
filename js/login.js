console.log("JavaScript Loaded");

const loginUsername = document.querySelector(".username")
const loginPassword = document.querySelector(".password")

const infoAccount = document.querySelector('.info');

const username = 'sinaloaMRP'
const password = "aap-sinaloa"

const submit = document.querySelector(".submit");
submit.addEventListener('click', function () {
    if (loginUsername.value == username && loginPassword.value == password) {
        infoAccount.innerHTML += "Logged in succesfully"
    } else {
        infoAccount.innerHTML += `Foute Gebruikersnaam of Wachtwoord`
    }
})