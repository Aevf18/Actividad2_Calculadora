// Calculadora de propina
// Autor: Argenis Viloria
// Instituto: Instituto Universitario Politécnico Santiago Mariño
// Fecha: 28/10/2026

const MONEDA = "Bs";

// Elementos del HTML
const formulario = document.getElementById("formulario");
const inputMonto = document.getElementById("monto");
const inputPorcentaje = document.getElementById("porcentaje");
const btnLimpiar = document.getElementById("btnLimpiar");
const mensajeError = document.getElementById("mensajeError");
const seccionResultados = document.getElementById("resultados");

// Función para calcular la propina y el total
function calcularPropina(monto, porcentaje) {
// Validación de campos vacíos
    if (isNaN(monto) || isNaN(porcentaje)) {
        return { ok: false, error: "Ingresa números válidos en ambos campos." };
    }

// Validación de valores negativos o cero
    if (monto <= 0 || porcentaje <= 0) {
        return { ok: false, error: "El monto y el porcentaje deben ser mayores a cero." };
    }
   // Cálculo del porcentaje de propina y el total a pagar
    const propina = monto * porcentaje / 100;
    const total = monto + propina;
    return { ok: true, monto, porcentaje, propina, total };
}
// Evento: al presionar "Calcular" o Enter
formulario.addEventListener("submit", function (evento) {
    evento.preventDefault(); 
    // Obtiene los valores de los inputs y los convierte a números
    let monto = Number(inputMonto.value);
    let porcentaje = Number(inputPorcentaje.value);
    const r = calcularPropina(monto, porcentaje);
// Manejo de errores
    if (!r.ok) {
        mensajeError.textContent = r.error;
        mensajeError.hidden = false;
        seccionResultados.hidden = true;
        console.error("Error: " + r.error);
        return;
    }

   // Muestra los resultados en la sección de resultados
    document.getElementById("resMonto").textContent = MONEDA + " " + r.monto.toFixed(2);
    document.getElementById("resPorcentaje").textContent = r.porcentaje + "%";
    document.getElementById("resPropina").textContent = MONEDA + " " + r.propina.toFixed(2);
    document.getElementById("resTotal").textContent = MONEDA + " " + r.total.toFixed(2);
    mensajeError.hidden = true;
    seccionResultados.hidden = false;

    // resultados para ver en la consola
    console.log("** RESULTADOS DE LA CALCULADORA,\n DE PROPINA **");
    console.log("--- Actividad Argenis Viloria ---");
    console.log("==============================");
    console.log(`Monto de la cuenta : ${MONEDA} ${r.monto.toFixed(2)}`);
    console.log(`Porcentaje propina : ${r.porcentaje}%`);
    console.log(`Valor de la propina: ${MONEDA} ${r.propina.toFixed(2)}`);
    console.log("------------------------------");
    console.log(`TOTAL A PAGAR      : ${MONEDA} ${r.total.toFixed(2)}`);
    console.log("==============================");
});
// Evento: boton para limpiar el formulario
btnLimpiar.addEventListener("click", function () {
    formulario.reset();
    mensajeError.hidden = true;
    seccionResultados.hidden = true;
    inputMonto.focus();
});
