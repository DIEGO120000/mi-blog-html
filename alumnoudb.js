// alumnoudb.js - Implementación de la Clase Alumno

// 1. Definición de la Clase Alumno (Objeto Personalizado)
class Alumno {
    // Constructor: Recibe los datos del formulario
    constructor(codigo, nombre, nota) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.nota = parseFloat(nota); // Asegura que la nota sea un número
    }

    // Método: Determina si el alumno aprobó (>= 70)
    estaAprobado() {
        return this.nota >= 70;
    }

    // Método: Genera el HTML para mostrar la información y el estado
    mostrarInfo() {
        const estado = this.estaAprobado() ? "APROBADO" : "REPROBADO";
        const claseEstado = this.estaAprobado() ? "estado-aprobado" : "estado-reprobado";

        return `
            <h2>Matrícula Exitosa</h2>
            <p><strong>Código:</strong> ${this.codigo}</p>
            <p><strong>Nombre:</strong> ${this.nombre}</p>
            <p><strong>Nota Final:</strong> ${this.nota.toFixed(2)}</p>
            <p><strong>Estado:</strong> <span class="${claseEstado}">${estado}</span></p>
        `;
    }
}

// 2. Función principal llamada por el botón
function registrarAlumno() {
    // a. Obtener los valores del formulario
    const codigo = document.getElementById("codigo").value.trim();
    const nombre = document.getElementById("nombre").value.trim();
    const nota = document.getElementById("nota").value.trim();

    // b. Validar que los campos no estén vacíos
    if (!codigo || !nombre || !nota) {
        document.getElementById("info-alumno").innerHTML = `
            <h2>Error de Registro</h2>
            <p style="color: red;">Por favor, complete todos los campos para matricular al alumno.</p>
        `;
        return;
    }

    // c. Crear una nueva instancia (Objeto) de la Clase Alumno
    const nuevoAlumno = new Alumno(codigo, nombre, nota);

    // d. Mostrar la información del objeto llamando a su método
    document.getElementById("info-alumno").innerHTML = nuevoAlumno.mostrarInfo();
}
