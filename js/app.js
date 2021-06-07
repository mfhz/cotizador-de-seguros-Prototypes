
// Constructores
function Seguro(marca, year, tipo) {
    
}
function UI() {}

// Llenar las opciones del año
UI.prototype.llenarOpciones = () => {    
    const max = new Date().getFullYear(),
            min = max - 20;
    const selecYear = document.querySelector('#year');

    for (let i = max; i > min; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selecYear.appendChild(option);        
    }
}


// Muestra alertas en pantalla
UI.prototype.mostrarMensaje = (mensaje,  tipo) => {
    const div = document.createElement('div');

    if (tipo === 'error') {
        div.classList.add('error');
    } else {
        div.classList.add('correcto');
    }
    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;

    // Insertar en el HTML
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resultado'));

    setTimeout(() => {
        div.remove();
    }, 3000)

}

// Instanciar UI
const ui = new UI();


document.addEventListener('DOMContentLoaded', () => {    
    ui.llenarOpciones(); // Llena el select con los años..
});


eventListeners();
function eventListeners() {
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
}


function cotizarSeguro(e) {
    e.preventDefault();
    
    // Leer la marcar seleccionada
    const marca = document.querySelector('#marca').value;
    // console.log(marca);  

    // Leer el año seleccionado
    const year = document.querySelector('#year').value;

    // Leer el tipo de cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    // console.log(tipo);

    if (marca === '' || year === '' || tipo === '') {
        // console.log('No pasa la validación');
        ui.mostrarMensaje('Todos los campos son obligatorios', 'error');
    } 

    ui.mostrarMensaje('Cotizando....', 'exito');


    // Instanciar el seguro

    // Utilizar el prototype que va a cotizar
}

