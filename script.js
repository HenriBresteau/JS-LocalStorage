const name = () => {
    let sayHello = document.getElementById('sayHello');
    let nameStorage = localStorage.getItem('nom');

    if (nameStorage == null) {
        sayHello.innerHTML = "BOnjour à toi l'incoonu, merci de renseigner ton pseudo"
    } else {
        sayHello.innerHTML = `Bonjour ${nameStorage}`;
    }
};

function setData() {
    let pseudo = document.getElementById('pseudo').value;
    localStorage.setItem('nom',pseudo);
}
name();