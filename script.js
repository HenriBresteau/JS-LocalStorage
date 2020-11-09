const name = () => {
    let sayHello = document.getElementById('sayHello');
    let nameStorage = localStorage.getItem('nom');

    if (nameStorage == null) {
        sayHello.innerHTML = "BOnjour à toi l'inconnu, merci de renseigner ton pseudo"
    } else {
        sayHello.innerHTML = `Bonjour ${nameStorage}`;
    }
};

function setData() {
    let pseudo = document.getElementById('pseudo').value;
    localStorage.setItem('nom',pseudo);
}

const visit = () =>{
    let visitDisplay = document.getElementById('visitDisplay');
    let visitCount = localStorage.getItem('visites');

    visitCount++;
    localStorage.setItem('visites', visitCount);
    visitDisplay.innerHTML = `Nombre de visites ${visitCount}`
}

name();
visit();