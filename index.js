// Crear variables para los botones y div

// botones
var btnUno = document.getElementById('btnUno')
var btnDos = document.getElementById('btnDos')
var btnTres = document.getElementById('btnTres')
var btnCuatro = document.getElementById('btnCuatro')
var btnCinco = document.getElementById('btnCinco')
var btnSeis = document.getElementById('btnSeis')
var btnSiete = document.getElementById('btnSiete')
var btnOcho = document.getElementById('btnOcho')
var btonNueve = document.getElementById('btnNueve')
var btnCero = document.getElementById('btnCero')
var btnDel = document.getElementById('btnDelete')
var btn_10 = document.getElementById('btn_10')
var btn_15 = document.getElementById('btn_15')
var btn_20 = document.getElementById('btn_20')
//div
var inptNum = document.getElementById('div_inpt')
var resultado = document.getElementById('div-resultado')

// Crear funcion para el clic del boton el cual recibirá como parámetro el boton
function clickBtn(btn) {
    if (inptNum.textContent == '0' || resultadoVisible) {
        inptNum.innerHTML = btn.textContent
        resultado.innerHTML = '';
        resultadoVisible = false;
    } else {
        inptNum.innerHTML += btn.textContent
    }
}

// Crear funcion para borrar el último elemento
function bkSpace(div) {
    if(div.innerHTML.length == 1){
        inptNum.innerHTML = '0';
    }else if (inptNum.innerHTML != '0') {
        let numOriginal = div.innerHTML
        let numNuevo = numOriginal.substring(0, numOriginal.length - 1);
        inptNum.innerHTML = numNuevo;
    }
 }

// Crear funcion para el resultado de los porcentajes
var resultadoVisible = false;
function f_resultado(btn_porcentaje) {
    let porcentaje = parseInt(btn_porcentaje.textContent.substring(0, btn_porcentaje.textContent.length - 2)) / 100;
    if (inptNum.innerHTML != '0') {
        let total = parseInt(inptNum.innerHTML);
        total = total + (total * porcentaje);

        resultado.innerHTML = total;
        resultadoVisible = true;
    } else {
        resultado.innerHTML = '0';
    }
}

// Detectar elevento click de cada boton numerico
btnUno.addEventListener('click', (event) => clickBtn(btnUno))
btnDos.addEventListener('click', (event) => clickBtn(btnDos))
btnTres.addEventListener('click', (event) => clickBtn(btnTres))
btnCuatro.addEventListener('click', (event) => clickBtn(btnCuatro))
btnCinco.addEventListener('click', (event) => clickBtn(btnCinco))
btnSeis.addEventListener('click', (event) => clickBtn(btnSeis))
btnSiete.addEventListener('click', (event) => clickBtn(btnSiete))
btnOcho.addEventListener('click', (event) => clickBtn(btnOcho))
btonNueve.addEventListener('click', (event) => clickBtn(btonNueve))
btnCero.addEventListener('click', (event) => clickBtn(btnCero))
// boton delete
btnDel.addEventListener('click', (event) => bkSpace(inptNum))
// boton de porcentaje
btn_10.addEventListener('click', (event) => f_resultado(btn_10))
btn_15.addEventListener('click', (event) => f_resultado(btn_15))
btn_20.addEventListener('click', (event) => f_resultado(btn_20))


// Eventos con el teclado

// Traer librería de mousetrap
const Mousetrap = require('mousetrap')

Mousetrap.bind('1', (event) => clickBtn(btnUno))
Mousetrap.bind('2', (event) => clickBtn(btnDos))
Mousetrap.bind('3', (event) => clickBtn(btnTres))
Mousetrap.bind('4', (event) => clickBtn(btnCuatro))
Mousetrap.bind('5', (event) => clickBtn(btnCinco))
Mousetrap.bind('6', (event) => clickBtn(btnSeis))
Mousetrap.bind('7', (event) => clickBtn(btnSiete))
Mousetrap.bind('8', (event) => clickBtn(btnOcho))
Mousetrap.bind('9', (event) => clickBtn(btonNueve))
Mousetrap.bind('0', (event) => clickBtn(btnCero))
Mousetrap.bind('backspace', (event) => bkSpace(inptNum))
