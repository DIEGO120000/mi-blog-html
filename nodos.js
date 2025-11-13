document.addEventListener('DOMContentLoaded', () => {
    const tabla = document.getElementById('miTabla');
    const resultadosDiv = document.getElementById('resultados');
    let output = '';

    if (tabla) {
        // 1. Obtener filas totales (incluyendo thead)
        const filas = tabla.getElementsByTagName('tr');
        const numFilas = filas.length;
        output += `Cantidad de Filas (incl. encabezado): ${numFilas}\n`;

        // 2. Obtener columnas (asumiendo que todas las filas tienen el mismo número de columnas)
        const primeraFila = filas[0];
        const columnas = primeraFila ? primeraFila.getElementsByTagName('th').length || primeraFila.getElementsByTagName('td').length : 0;
        output += `Cantidad de Columnas: ${columnas}\n\n`;

        output += "Contenido de las celdas:\n";

        // 3. Recorrer filas y celdas
        for (let i = 0; i < filas.length; i++) {
            const celdas = filas[i].getElementsByTagName('td').length ? filas[i].getElementsByTagName('td') : filas[i].getElementsByTagName('th');

            for (let j = 0; j < celdas.length; j++) {
                // Contenido, incluyendo un ajuste para el thead
                const tipoCelda = celdas[j].tagName.toLowerCase();
                const filaIndex = tipoCelda === 'th' ? 'Encabezado' : i;
                output += `[Fila ${filaIndex}, Columna ${j}]: ${celdas[j].textContent}\n`;
            }
        }
    } else {
        output = "No se encontró la tabla con ID 'miTabla'.";
    }

    // Mostrar resultados
    resultadosDiv.textContent = output;
});