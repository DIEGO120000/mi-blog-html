// showcar.js - Implementación de la Clase Carro

// 1. Definición de la Clase Carro
class Carro {
    // Constructor: Inicializa las propiedades
    constructor(marca, modelo, anio, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.color = color;
        this.encendido = false; // Propiedad inicial por defecto
    }

    // Método: Describe el estado y las características del carro
    obtenerDescripcion() {
        const estado = this.encendido ? "Encendido" : "Apagado";

        return `
            <div class="car-details">
                <h2>Vehículo: ${this.marca} ${this.modelo}</h2>
                <p>Modelo Año: <strong>${this.anio}</strong></p>
                <p>Color: <strong>${this.color}</strong></p>
                <p>Estado Actual: <strong style="color: ${this.encendido ? 'green' : 'red'};">${estado}</strong></p>
            </div>
        `;
    }

    // Método: Cambia el estado del carro
    encender() {
        this.encendido = true;
    }
}

// 2. Creación e Instancia del Objeto Carro
const miCarro = new Carro("Toyota", "Corolla", 2023, "Rojo");

// 3. Modificación del estado del objeto usando un método
miCarro.encender();

// 4. Obtener la descripción formateada usando el método obtenerDescripcion()
const descripcionHTML = miCarro.obtenerDescripcion();

// 5. Inyección del resultado en el contenedor HTML
document.getElementById("car-container").innerHTML = descripcionHTML;
