let parrafoCounter = 2; // Contador para IDs únicos

// Función principal: Anexar/Enviar (appendChild)
function anexarParrafo() {
    const text = document.getElementById('textInput').value.trim();
    if (text === '') {
        alert('Por favor, ingresa texto para anexar.');
        return;
    }
    const visibleSection = document.getElementById('visibleSection');

    // 1. Crear el nuevo nodo <p>
    const nuevoParrafo = document.createElement('p');
    nuevoParrafo.textContent = `(${parrafoCounter++}) Contenido Anexado: ${text}`;
    nuevoParrafo.className = 'parrafo-item';
    nuevoParrafo.id = `p${parrafoCounter}`;

    // 2. Anexar al final de la sección visible
    visibleSection.appendChild(nuevoParrafo);

    // Limpiar el área de texto
    document.getElementById('textInput').value = '';
}

// Función: Crear un nuevo párrafo vacío (appendChild)
function crearNuevoParrafo() {
    const visibleSection = document.getElementById('visibleSection');

    const nuevoParrafo = document.createElement('p');
    nuevoParrafo.textContent = `(${parrafoCounter++}) Nuevo Párrafo VACÍO Creado.`;
    nuevoParrafo.className = 'parrafo-item';
    nuevoParrafo.id = `p${parrafoCounter}`;

    visibleSection.appendChild(nuevoParrafo);
}

// Función: Eliminar el último párrafo (removeChild)
function eliminarUltimoParrafo() {
    const visibleSection = document.getElementById('visibleSection');
    const hijos = visibleSection.children;

    if (hijos.length > 0) {
        // Obtener el último hijo
        const ultimoHijo = hijos[hijos.length - 1];
        // Remover el hijo
        visibleSection.removeChild(ultimoHijo);
    } else {
        alert('No hay párrafos para eliminar.');
    }
}

// Función: Insertar un párrafo antes de otros (insertBefore)
function insertarAntes() {
    const visibleSection = document.getElementById('visibleSection');

    // Nodo a insertar
    const nuevoParrafo = document.createElement('p');
    nuevoParrafo.textContent = `(${parrafoCounter++}) Párrafo Insertado ANTES de la Referencia 1.`;
    nuevoParrafo.className = 'parrafo-item';
    nuevoParrafo.id = `p${parrafoCounter}`;

    // Nodo de referencia (el párrafo con ID 'p1')
    const referencia = document.getElementById('p1');

    if (referencia) {
        // 1. Usa insertBefore(nuevoNodo, nodoReferencia)
        visibleSection.insertBefore(nuevoParrafo, referencia);
    } else {
        alert('El párrafo de referencia (p1) no se encontró. Se anexará al final.');
        visibleSection.appendChild(nuevoParrafo);
    }
}
