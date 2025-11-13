// La función addField se llama directamente desde el HTML
function addField(type, inputType) {
    const container = document.getElementById('fieldsContainer');

    // Crear el div contenedor para el nuevo campo
    const groupDiv = document.createElement('div');
    groupDiv.className = 'form-group';

    // Crear la etiqueta (Label)
    const label = document.createElement('label');
    label.textContent = capitalizeFirstLetter(type) + ':';

    // Crear el elemento de entrada (Input o Textarea)
    let inputElement;
    if (inputType === 'textarea') {
        inputElement = document.createElement('textarea');
    } else {
        inputElement = document.createElement('input');
        inputElement.type = inputType;
    }

    // Asignar el nombre del campo como arreglo para manejar múltiples campos del mismo tipo
    inputElement.name = type + '[]';

    // Botón de eliminar (con icono)
    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.className = 'delete-btn';

    const deleteIcon = document.createElement('img');
    deleteIcon.src = 'img/delete.png'; // Ruta a la imagen
    deleteIcon.alt = 'Eliminar';

    deleteButton.appendChild(deleteIcon);

    // Asignar el evento de eliminación: eliminar el padre del botón (groupDiv)
    deleteButton.onclick = function () {
        container.removeChild(groupDiv);
    };

    // Ensamblar el nuevo campo
    groupDiv.appendChild(label);
    groupDiv.appendChild(inputElement);
    groupDiv.appendChild(deleteButton);

    // Insertar en el contenedor
    container.appendChild(groupDiv);
}

// Función auxiliar para capitalizar
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
