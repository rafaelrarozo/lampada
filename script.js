const turnOn = document.getElementById("turnOn");
const turnOff = document.getElementById("turnOff");
const lamp = document.getElementById("lamp");


function estaQuebrada() {
    return lamp.src.indexOf('broken.jpg') > -1
}

function lampOn() {
    if (!estaQuebrada()) {
        lamp.src = './assets/on.jpg';
    }
}

function lampOff() {
    if (!estaQuebrada()) {
        lamp.src = './assets/off.jpg'
    }
}

function broken() {
    lamp.src = './assets/broken.jpg'
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover',lampOn);
lamp.addEventListener('mouseleave',lampOff);
lamp.addEventListener('dblclick',broken);