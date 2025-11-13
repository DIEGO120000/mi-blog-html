function generarTabla() {
    const numFilas = parseInt(document.getElementById('filas').value);
    const numCols = parseInt(document.getElementById('columnas').value);
    const conEncabezado = document.getElementById('conEncabezado').checked;
    const outputDiv = document.getElementById('tabla-output');

    // Validar entradas
    if (isNaN(numFilas) || isNaN(numCols) || numFilas < 1 || numCols < 1) {
        alert('Por favor, ingresa valores válidos para filas y columnas (mínimo 1).');
        return;
    }

    // Limpiar contenido anterior
    outputDiv.innerHTML = '';

    // 1. Crear el nodo de la tabla
    const tabla = document.createElement('table');
    tabla.id = 'tablaGenerada';

    // 2. Crear encabezado (si se selecciona)
    if (conEncabezado) {
        const thead = document.createElement('thead');
        const tr = document.createElement('tr');
        for (let j = 0; j < numCols; j++) {
            const th = document.createElement('th');
            th.textContent = `Encabezado Col ${j + 1}`;
            tr.appendChild(th);
        }
        thead.appendChild(tr);
        tabla.appendChild(thead);
    }

    // 3. Crear el cuerpo de la tabla (tbody)
    const tbody = document.createElement('tbody');
    for (let i = 0; i < numFilas; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < numCols; j++) {
            const td = document.createElement('td');
            // Llenar con contenido por defecto
            td.textContent = `Celda [${i},${j}]`;
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    tabla.appendChild(tbody);

    // 4. Insertar la tabla completa en el DOM
    outputDiv.appendChild(tabla);
}
