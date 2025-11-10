// libro.js - Uso de Objetos Personalizados (Clase)

// 1. Definición de la Clase Libro (Plantilla para crear objetos)
class Libro {
    constructor(titulo, autor, isbn, anio) {
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
        this.anio = anio;
    }

    // Método: Devuelve el HTML formateado para mostrar la información del libro
    mostrarInfo() {
        return `
            <div class="libro-card">
                <div class="titulo">${this.titulo}</div>
                <p class="propiedad">Autor: <span class="propiedad-valor">${this.autor}</span></p>
                <p class="propiedad">ISBN: <span class="propiedad-valor">${this.isbn}</span></p>
                <p class="propiedad">Año: <span class="propiedad-valor">${this.anio}</span></p>
            </div>
        `;
    }
}

// 2. Creación de Objetos Personalizados (Instancias de la Clase Libro)
const libro1 = new Libro(
    "Cien años de soledad",
    "Gabriel García Márquez",
    "978-0307474728",
    1967
);

const libro2 = new Libro(
    "1984",
    "George Orwell",
    "978-0451524935",
    1949
);

// 3. Obtener el contenedor HTML
const catalogoDiv = document.getElementById("catalogo");

// 4. Inyectar la información de cada objeto en el HTML
catalogoDiv.innerHTML = libro1.mostrarInfo() + libro2.mostrarInfo();