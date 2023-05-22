// Definir/crear arreglo
const datos = [
    'Vagrant',
    'Docker',
    'Ansible',
    'Integración continua',
];

// Crear la tabla
const table = document.createElement('table');

// Crear las filas y llenarlas con los datos
for (let i = 0; i < datos.length; i++) {
    const rows = document.createElement('tr');
    const cells = document.createElement('td');
    cells.textContent = datos[i];
    rows.appendChild(cells);
    table.appendChild(rows);
}

// Agregar la tabla al elemento con el id "tabla-container"
const tableContainer = document.getElementById('table');
tableContainer.appendChild(table);
