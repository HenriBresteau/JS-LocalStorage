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
    setTimeout(() => {
        getIP();
    }, 500);
    
}

name();
visit();

const cityDisplay = document.getElementById('city');
const regionDisplay = document.getElementById('region');
const paysDisplay = document.getElementById('pays');
const getIP = async() => {
    await fetch('http://ip-api.com/json/')
    .then(res => res.json())
    .then( res => {
        console.log(res);
        cityDisplay.innerHTML = res.city;
        regionDisplay.innerHTML = res.regionName;
        paysDisplay.innerHTML = res.country;
    })
}
