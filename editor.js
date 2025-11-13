let tablaActual = null; // Variable global para almacenar la tabla

function crearTablaEditable() {
    const numFilas = parseInt(document.getElementById('filasCrear').value);
    const numCols = parseInt(document.getElementById('colsCrear').value);
    const outputDiv = document.getElementById('tabla-output-editor');

    if (isNaN(numFilas) || isNaN(numCols) || numFilas < 1 || numCols < 1) {
        alert('Valores no válidos para crear la tabla.');
        return;
    }

    outputDiv.innerHTML = ''; // Limpiar

    // Crear la tabla
    const tabla = document.createElement('table');
    tabla.id = 'tablaEditor';

    // Encabezado
    const thead = document.createElement('thead');
    const trHead = document.createElement('tr');
    for (let j = 0; j < numCols; j++) {
        const th = document.createElement('th');
        th.textContent = `Col ${j}`;
        trHead.appendChild(th);
    }
    thead.appendChild(trHead);
    tabla.appendChild(thead);

    // Cuerpo
    const tbody = document.createElement('tbody');
    for (let i = 0; i < numFilas; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < numCols; j++) {
            const td = document.createElement('td');
            td.textContent = `[${i},${j}]`;
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    tabla.appendChild(tbody);

    outputDiv.appendChild(tabla);
    tablaActual = tabla; // Guardar la referencia a la tabla
}

function actualizarCelda() {
    if (!tablaActual) {
        alert('Primero debes crear la tabla.');
        return;
    }

    const filaIdx = parseInt(document.getElementById('filaActualizar').value);
    const colIdx = parseInt(document.getElementById('columnaActualizar').value);
    const nuevoValor = document.getElementById('nuevoValor').value;

    if (isNaN(filaIdx) || isNaN(colIdx) || nuevoValor.trim() === '') {
        alert('Ingresa valores válidos de fila, columna y el nuevo valor.');
        return;
    }

    // Obtener las filas del cuerpo de la tabla
    const tbody = tablaActual.getElementsByTagName('tbody')[0];
    const filas = tbody.getElementsByTagName('tr');

    // Obtener límites
    const maxFilas = filas.length;
    const maxCols = filas[0] ? filas[0].getElementsByTagName('td').length : 0;

    // 1. Validar que los índices estén dentro del rango
    if (filaIdx >= 0 && filaIdx < maxFilas && colIdx >= 0 && colIdx < maxCols) {
        const fila = filas[filaIdx];
        const celda = fila.getElementsByTagName('td')[colIdx];

        // 2. Modificar el contenido de la celda
        celda.textContent = nuevoValor;
    } else {
        alert(`Error: La celda [${filaIdx}, ${colIdx}] está fuera del rango permitido. Filas: 0-${maxFilas - 1}, Columnas: 0-${maxCols - 1}.`);
    }
}

// Inicializar la tabla al cargar la página
document.addEventListener('DOMContentLoaded', crearTablaEditable);
