console.log('Aap gaat elke keer dood');

const contentTitle = document.querySelector('.note');
const contentDate = document.querySelector('.date');
const content = document.querySelector('.content');

const geefNotitieBtn = document.querySelector('.give-note');
geefNotitieBtn.addEventListener('click', geefNotitie)

function geefNotitie() {
    alert('Uw notitie is opgeslagen');
    console.log(`Titel: ${contentTitle.value}`)
    console.log(`Datum: ${contentDate.value}`)
    console.log(`Inhoud: ${content.value}`)

    let titleNote = contentTitle.value;
    let dateNote = contentDate.value;
    let contentNote = content.value;

    localStorage.setItem('titel', titleNote);
    localStorage.setItem('datum', dateNote);
    localStorage.setItem('inhoud', contentNote);
}

const lookAtNotes = document.querySelector('.look-notes');
lookAtNotes.addEventListener('click', notes);

function notes() {
    localStorage.getItem('titel')
    localStorage.getItem('datum')
    localStorage.getItem('inhoud')
}








// const titelNotitie = prompt('Wat is de titel?')
// const datumNotitie = prompt('Wat is de datum? DD-MM-JAAR')
// const inhoudNotitie = prompt('Zet hier meer informatie over uw notitie neer.')