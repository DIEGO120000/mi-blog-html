// calculo.js - Versión Interactiva y Corregida

// 1. Definición de la Clase Rectangulo (POO)
class Rectangulo {
    // Constructor
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }

    // Método: Calcula el Área
    calcularArea() {
        return this.alto * this.ancho;
    }

    // Método: Calcula el Perímetro
    calcularPerimetro() {
        return 2 * (this.alto + this.ancho);
    }
}

// 2. Solicitud de Datos al Usuario (Interactividad)
// Usamos parseFloat para asegurar que son números
const alto = parseFloat(prompt("Ingrese el ALTO del rectángulo:"));
const ancho = parseFloat(prompt("Ingrese el ANCHO del rectángulo:"));


// 3. Crear una instancia (Objeto) usando los datos del usuario
if (!isNaN(alto) && !isNaN(ancho)) {
    const miRectangulo = new Rectangulo(alto, ancho);

    // 4. Cálculos
    const area = miRectangulo.calcularArea();
    const perimetro = miRectangulo.calcularPerimetro();

    // 5. Inyección del resultado en el HTML (Con la 'Á' corregida)
    document.getElementById("resultados").innerHTML = `
        <h2>Rectángulo:</h2>
        <p>Dimensiones: ${miRectangulo.alto} x ${miRectangulo.ancho}</p>
        <p>Área: ${area}</p>
        <p>Perímetro: ${perimetro}</p>
    `;
} else {
    // Manejo de error si el usuario cancela o ingresa texto
    document.getElementById("resultados").innerHTML =
        `<p style="color: red; font-weight: bold;">Por favor, ingrese valores numéricos válidos.</p>`;
}
