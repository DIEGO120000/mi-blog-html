document.addEventListener('DOMContentLoaded', () => {
    const tabla = document.getElementById('tablaPosiciones');
    const resultadosArea = document.getElementById('resultadosArea');
    let output = '';

    // Obtener todas las filas del body
    const filasBody = tabla.getElementsByTagName('tbody')[0].getElementsByTagName('tr');

    // Recorrer las filas
    for (let i = 0; i < filasBody.length; i++) {
        const fila = filasBody[i];
        const celdas = fila.getElementsByTagName('td');

        // Recorrer las celdas de la fila
        for (let j = 0; j < celdas.length; j++) {
            const celda = celdas[j];

            // i es la posición de la fila (empezando en 0, no contando el thead)
            // j es la posición de la columna (empezando en 0)
            output += `Valor: "${celda.textContent}" | Fila [${i}] | Columna [${j}]\n`;
        }
    }

    resultadosArea.value = output;
});
