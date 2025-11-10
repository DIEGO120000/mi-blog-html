// calculoedad.js - Uso del objeto Date

// Función principal que se llama desde el botón
function calcularEdad() {
    // 1. Obtener la fecha ingresada por el usuario (como string)
    const fechaInput = document.getElementById("fechaNacimiento").value;

    if (!fechaInput) {
        document.getElementById("resultado").innerHTML = "Por favor, ingresa una fecha válida.";
        return; // Detiene la ejecución si no hay fecha
    }

    // 2. Crear objetos Date (Objeto Incorporado)
    const fechaNac = new Date(fechaInput);
    const hoy = new Date();

    // 3. Obtener la diferencia en milisegundos
    const diffMilisegundos = hoy - fechaNac;

    // 4. Cálculo de edad en años

    // Milisegundos en un año (considerando 365.25 días para bisiestos)
    const msPorAnio = 1000 * 60 * 60 * 24 * 365.25;

    // Calcula la edad en años (se usa Math.floor para obtener solo el número entero de años)
    const edadAnios = Math.floor(diffMilisegundos / msPorAnio);

    // 5. Mostrar resultado en la página
    document.getElementById("resultado").innerHTML = `
        <p>Tu edad actual es:</p>
        <p style="font-size: 2em; color: #dc3545;">${edadAnios} años</p>
        <p style="font-size: 0.9em; font-style: italic;">(Cálculo basado en el Objeto Date)</p>
    `;
}
