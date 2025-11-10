// zonahoraria.js - Uso del objeto Date y Localización

// Función principal llamada por el evento onchange
function mostrarHora() {
    // 1. Obtener el valor seleccionado del menú (ej: "Asia/Tokyo")
    const selector = document.getElementById("selectorZona");
    const zonaSeleccionada = selector.value;
    const nombreZona = selector.options[selector.selectedIndex].text;

    const horaOutput = document.getElementById("hora-actual");
    const zonaOutput = document.getElementById("zona-display");

    if (zonaSeleccionada === "") {
        horaOutput.innerHTML = "";
        zonaOutput.innerHTML = "Selecciona una ciudad para ver la hora.";
        return;
    }

    // 2. Crear una nueva instancia de Date (Objeto Incorporado)
    const fecha = new Date();

    // 3. Usar toLocaleTimeString para formatear la hora según la zona horaria (Objeto Intl)
    const horaFormateada = fecha.toLocaleTimeString('es-ES', {
        timeZone: zonaSeleccionada,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false // Formato 24 horas
    });

    // 4. Mostrar resultados
    zonaOutput.innerHTML = `Hora en: ${nombreZona}`;
    horaOutput.innerHTML = horaFormateada;
}

// Opcional: Llamar la función al cargar la página para mostrar el mensaje inicial
document.addEventListener('DOMContentLoaded', () => {
    mostrarHora();
});