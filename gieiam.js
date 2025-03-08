// Función para guardar los datos del docente
function registrarDocente(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre-docente').value;
    const formacion = document.getElementById('formacion-docente').value;
    const horario = document.getElementById('horario-docente').value;

    const docentes = JSON.parse(localStorage.getItem('docentes')) || [];
    docentes.push({ nombre, formacion, horario });
    localStorage.setItem('docentes', JSON.stringify(docentes));

    alert('Docente registrado correctamente');
    mostrarRegistros(); // Llamar para actualizar la vista
}

// Función para vincular estudiante a semillero
function vincularEstudiante(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre-estudiante').value;
    const codigo = document.getElementById('codigo-estudiante').value;
    const carrera = document.getElementById('carrera-estudiante').value;
    const semillero = document.getElementById('semillero-estudiante').value;

    const estudiantes = JSON.parse(localStorage.getItem('estudiantes')) || [];
    estudiantes.push({ nombre, codigo, carrera, semillero });
    localStorage.setItem('estudiantes', JSON.stringify(estudiantes));

    alert('Estudiante vinculado correctamente');
    mostrarRegistros(); // Llamar para actualizar la vista
}

// Función para agregar semillero
function agregarSemillero(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre-semillero').value;
    const descripcion = document.getElementById('descripcion-semillero').value;

    const semilleros = JSON.parse(localStorage.getItem('semilleros')) || [];
    semilleros.push({ nombre, descripcion });
    localStorage.setItem('semilleros', JSON.stringify(semilleros));

    alert('Semillero agregado correctamente');
    actualizarSemilleros(); // Llamar para actualizar las opciones de semillero en los formularios
}

// Función para actualizar las opciones de semilleros disponibles
function actualizarSemilleros() {
    const semilleros = JSON.parse(localStorage.getItem('semilleros')) || [];
    const semilleroSelect = document.getElementById('semillero-estudiante');

    // Limpiar las opciones de semilleros antes de agregar nuevas
    semilleroSelect.innerHTML = '';

    // Crear una opción vacía por defecto
    const defaultOption = document.createElement('option');
    defaultOption.textContent = 'Seleccionar Semillero';
    semilleroSelect.appendChild(defaultOption);

    // Agregar los semilleros disponibles
    semilleros.forEach(semillero => {
        const option = document.createElement('option');
        option.value = semillero.nombre;
        option.textContent = semillero.nombre;
        semilleroSelect.appendChild(option);
    });
}

// Función para mostrar los registros
function mostrarRegistros() {
    const docentes = JSON.parse(localStorage.getItem('docentes')) || [];
    const estudiantes = JSON.parse(localStorage.getItem('estudiantes')) || [];
    const semilleros = JSON.parse(localStorage.getItem('semilleros')) || [];

    const registrosContainer = document.getElementById('registros');

    // Limpiar la sección antes de agregar nuevos registros
    registrosContainer.innerHTML = '';

    // Mostrar Docentes
    if (docentes.length > 0) {
        const docentesDiv = document.createElement('div');
        docentesDiv.classList.add('col-md-12', 'mb-4');
        docentesDiv.innerHTML = `<h5>Docentes Investigadores</h5>`;
        registrosContainer.appendChild(docentesDiv);

        docentes.forEach((docente, index) => {
            const docenteDiv = document.createElement('div');
            docenteDiv.classList.add('col-md-4', 'mb-4');
            docenteDiv.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${docente.nombre}</h5>
                        <p class="card-text"><strong>Formación:</strong> ${docente.formacion}</p>
                        <p class="card-text"><strong>Horario:</strong> ${docente.horario}</p>
                        <button class="btn btn-danger" onclick="eliminarDocente(${index})">Eliminar</button>
                    </div>
                </div>
            `;
            registrosContainer.appendChild(docenteDiv);
        });
    }

    // Mostrar Estudiantes
    if (estudiantes.length > 0) {
        const estudiantesDiv = document.createElement('div');
        estudiantesDiv.classList.add('col-md-12', 'mb-4');
        estudiantesDiv.innerHTML = `<h5>Estudiantes Vinculados</h5>`;
        registrosContainer.appendChild(estudiantesDiv);

        estudiantes.forEach((estudiante, index) => {
            const estudianteDiv = document.createElement('div');
            estudianteDiv.classList.add('col-md-4', 'mb-4');
            estudianteDiv.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${estudiante.nombre}</h5>
                        <p class="card-text"><strong>Código:</strong> ${estudiante.codigo}</p>
                        <p class="card-text"><strong>Carrera:</strong> ${estudiante.carrera}</p>
                        <p class="card-text"><strong>Semillero:</strong> ${estudiante.semillero}</p>
                        <button class="btn btn-danger" onclick="eliminarEstudiante(${index})">Eliminar</button>
                    </div>
                </div>
            `;
            registrosContainer.appendChild(estudianteDiv);
        });
    }

    // Mostrar Semilleros
    if (semilleros.length > 0) {
        const semillerosDiv = document.createElement('div');
        semillerosDiv.classList.add('col-md-12', 'mb-4');
        semillerosDiv.innerHTML = `<h5>Semilleros de Investigación</h5>`;
        registrosContainer.appendChild(semillerosDiv);

        semilleros.forEach((semillero, index) => {
            const semilleroDiv = document.createElement('div');
            semilleroDiv.classList.add('col-md-4', 'mb-4');
            semilleroDiv.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${semillero.nombre}</h5>
                        <p class="card-text"><strong>Descripción:</strong> ${semillero.descripcion}</p>
                        <button class="btn btn-danger" onclick="eliminarSemillero(${index})">Eliminar</button>
                    </div>
                </div>
            `;
            registrosContainer.appendChild(semilleroDiv);
        });
    }
}

// Función para eliminar docente
function eliminarDocente(index) {
    const docentes = JSON.parse(localStorage.getItem('docentes')) || [];
    docentes.splice(index, 1); // Eliminar el docente
    localStorage.setItem('docentes', JSON.stringify(docentes));
    mostrarRegistros(); // Llamar para actualizar la vista
}

// Función para eliminar estudiante
function eliminarEstudiante(index) {
    const estudiantes = JSON.parse(localStorage.getItem('estudiantes')) || [];
    estudiantes.splice(index, 1); // Eliminar el estudiante
    localStorage.setItem('estudiantes', JSON.stringify(estudiantes));
    mostrarRegistros(); // Llamar para actualizar la vista
}

// Función para eliminar semillero
function eliminarSemillero(index) {
    const semilleros = JSON.parse(localStorage.getItem('semilleros')) || [];
    semilleros.splice(index, 1); // Eliminar el semillero
    localStorage.setItem('semilleros', JSON.stringify(semilleros));
    mostrarRegistros(); // Llamar para actualizar la vista
}

// Llamar a la función para mostrar los registros cuando se cargue la página
document.addEventListener('DOMContentLoaded', function() {
    mostrarRegistros();
    actualizarSemilleros(); // Llamar también para actualizar los semilleros disponibles
});
