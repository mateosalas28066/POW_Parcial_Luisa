// Función para registrar docentes
function registrarDocente(event) {
    event.preventDefault();

    const nombreDocente = document.getElementById('nombre-docente').value;
    const formacionDocente = document.getElementById('formacion-docente').value;
    const horarioDocente = document.getElementById('horario-docente').value;
    const grupoDocente = document.getElementById('grupo-docente').value;

    const docente = {
        nombre: nombreDocente,
        formacion: formacionDocente,
        horario: horarioDocente,
        grupo: grupoDocente
    };

    // Obtener docentes del localStorage
    let docentes = JSON.parse(localStorage.getItem('docentes')) || [];

    // Agregar nuevo docente
    docentes.push(docente);

    // Guardar en localStorage
    localStorage.setItem('docentes', JSON.stringify(docentes));
    mostrarRegistros(); // Actualizar los registros mostrados
}

// Función para vincular estudiantes a semilleros
function vincularEstudiante(event) {
    event.preventDefault();

    const nombreEstudiante = document.getElementById('nombre-estudiante').value;
    const codigoEstudiante = document.getElementById('codigo-estudiante').value;
    const carreraEstudiante = document.getElementById('carrera-estudiante').value;
    const semilleroEstudiante = document.getElementById('semillero-estudiante').value;

    const estudiante = {
        nombre: nombreEstudiante,
        codigo: codigoEstudiante,
        carrera: carreraEstudiante,
        semillero: semilleroEstudiante
    };

    // Obtener estudiantes del localStorage
    let estudiantes = JSON.parse(localStorage.getItem('estudiantes')) || [];

    // Agregar nuevo estudiante
    estudiantes.push(estudiante);

    // Guardar en localStorage
    localStorage.setItem('estudiantes', JSON.stringify(estudiantes));
    mostrarRegistros(); // Actualizar los registros mostrados
}

// Función para mostrar los registros
function mostrarRegistros() {
    // Obtener estudiantes y docentes del localStorage
    const estudiantes = JSON.parse(localStorage.getItem('estudiantes')) || [];
    const docentes = JSON.parse(localStorage.getItem('docentes')) || [];

    // Limpiar las listas de estudiantes y docentes
    const estudiantesComba = document.getElementById('estudiantes-comba');
    const estudiantesInforma = document.getElementById('estudiantes-informa');
    const docentesComba = document.getElementById('lista-docentes-comba');

    estudiantesComba.innerHTML = '';
    estudiantesInforma.innerHTML = '';
    docentesComba.innerHTML = '';

    // Recorrer estudiantes y asignarlos a los semilleros correspondientes
    estudiantes.forEach(estudiante => {
        const listItem = document.createElement('li');
        listItem.textContent = `${estudiante.nombre} (${estudiante.codigo})`;

        if (estudiante.semillero === 'comba') {
            estudiantesComba.appendChild(listItem);
        } else if (estudiante.semillero === 'informa') {
            estudiantesInforma.appendChild(listItem);
        }
    });

    // Recorrer docentes y asignarlos al semillero correspondiente
    docentes.forEach(docente => {
        const listItem = document.createElement('li');
        listItem.textContent = `${docente.nombre} - ${docente.formacion}`;

        if (docente.grupo === 'comba') {
            docentesComba.appendChild(listItem);
        }
    });
}

// Llamar a la función para mostrar registros al cargar la página
document.addEventListener('DOMContentLoaded', mostrarRegistros);
