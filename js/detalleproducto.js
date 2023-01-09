function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var name = getParameterByName('name');
var pricePrincipal = getParameterByName('pricePrincipal');
var priceSecundaria = getParameterByName('priceSecundaria');
var image = getParameterByName('image');
var description = getParameterByName('description');

const imagen = document.querySelector('#imagen');
const nombre = document.querySelector('#nombre');
const precioPrincipal = document.querySelector('#precioPrincipal');
const precioSecundaria = document.querySelector('#precioSecundaria');
const descripcion = document.querySelector('#descripcion');
const opcionesPlaystation = document.querySelector('#opcionesPlaystation');

imagen.setAttribute('src', image);
nombre.innerText= name;
precioPrincipal.innerText= 'S/ ' + pricePrincipal;
precioSecundaria.innerText= 'S/ ' + priceSecundaria;
descripcion.innerHTML = description;

if(priceSecundaria == 'undefined'){
    opcionesPlaystation.classList.add('hidden');
}
//radio buttons
const principal = document.querySelector('#principal');
const secundaria = document.querySelector('#secundaria');
const mensajePrincipal = document.querySelector('#mensajePrincipal');
const mensajeSecundaria = document.querySelector('#mensajeSecundaria');

principal.addEventListener('click', mostrarMensajePrincipal);
secundaria.addEventListener('click', mostrarMensajeSecundaria);

function mostrarMensajePrincipal(){
    mensajeSecundaria.classList.add('hidden');
    precioSecundaria.classList.add('hidden');
    precioPrincipal.classList.remove('hidden'); 
    mensajePrincipal.classList.remove('hidden');
}
function mostrarMensajeSecundaria(){
    mensajePrincipal.classList.add('hidden');
    precioPrincipal.classList.add('hidden');
    precioSecundaria.classList.remove('hidden');
    mensajeSecundaria.classList.remove('hidden');
}


//modal carrito
const imagenModal = document.querySelector('#imagenModal');
const nombreModal = document.querySelector('#nombreModal');
const precioModal = document.querySelector('#precioModal');

imagenModal.setAttribute('src', image);
nombreModal.innerText = name;
precioModal.innerText = 'S/ ' + pricePrincipal;



