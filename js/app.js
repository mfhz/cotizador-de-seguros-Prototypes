
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


// Instanciar UI
const ui = new UI();


document.addEventListener('DOMContentLoaded', () => {    
    ui.llenarOpciones(); // Llena el select con los años..
});

