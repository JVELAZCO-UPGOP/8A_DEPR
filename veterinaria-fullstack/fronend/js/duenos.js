const listaDuenos = document.getElementById('lista-duenos');
const nombre = document.getElementById('nombre');
const documento = document.getElementById('documento');
const apellido = document.getElementById('apellido');
const form = document.getElementById('form');
const btnGuardar = document.getElementById('btn-guardar');
const indice = document.getElementById('indice');
const titulo = document.getElementById('exampleModalCenterTitle');
const modal = document.getElementById('exampleModalCenter');
const url = "http://localhost:5000/duenos";

let duenos = [];

async function listarDuenos() {
    try {
        const respuesta = await fetch(url);
        const duenosDelServer = await respuesta.json();
        if (Array.isArray(duenosDelServer)) {
            duenos = duenosDelServer;
        }
        if (duenos.length > 0) {
            const htmlDuenos = duenos
                .map(
                    (dueno, index) => `<tr>
      <th scope="row">${index}</th>
      <td>${dueno.documento}</td>
      <td>${dueno.nombre}</td>
      <td>${dueno.apellido}</td>
      <td>
          <div class="btn-group" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-info editar"><i class="fas fa-edit"></i></button>
              <button type="button" class="btn btn-danger eliminar"><i class="far fa-trash-alt"></i></button>
          </div>
      </td>
    </tr>`
                )
                .join("");
            listaDuenos.innerHTML = htmlDuenos;
            Array.from(document.getElementsByClassName("editar")).forEach(
                (botonEditar, index) => (botonEditar.onclick = editar(index))
            );
            Array.from(document.getElementsByClassName("eliminar")).forEach(
                (botonEliminar, index) => (botonEliminar.onclick = eliminar(index))
            );
            return;
        }
        listaDuenos.innerHTML = `<tr>
    <td colspan="5" class="lista-vacia">No hay dueñ@s</td>
  </tr>`;
    } catch (error) {
        console.log({ error });
        $(".alert").show();
    }
}

async function enviarDatos(evento) {
    evento.preventDefault();
    try {
        const datos = {
            nombre: nombre.value,
            apellido: apellido.value,
            documento: documento.value,
        };
        const accion = btnGuardar.innerHTML;
        let urlEnvio = url;
        let method = "POST";
        if (accion === "Editar") {
            urlEnvio += `/${indice.value}`;
            method = "PUT";
        }
        const respuesta = await fetch(urlEnvio, {
            method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(datos),
            mode: "cors",
        });
        if (respuesta.ok) {
            listarDuenos();
            resetModal();
        }
    } catch (error) {
        console.log({ error });
        $(".alert").show();
    }
}

function editar(index) {
    return function cuandoCliqueo() {
        btnGuardar.innerHTML = 'Editar'
        titulo.innerHTML = "Editar Dueño"
        $('#exampleModalCenter').modal('toggle');
        const dueno = duenos[index];
        indice.value = index;
        nombre.value = dueno.nombre;
        apellido.value = dueno.apellido;
        documento.value = dueno.documento;


        $("#btn-cerrar").on("click", function() {
            indice.value = '';
            nombre.value = '';
            apellido.value = '';
            pais.value = 'País';
            identificacion.value = '';
            btnGuardar.innerHTML = 'Crear'
            titulo.innerHTML = "Nuevo Dueño";
        });

        $("#btn-close1").on("click", function() {
            indice.value = '';
            nombre.value = '';
            apellido.value = '';
            pais.value = 'País';
            identificacion.value = '';
            btnGuardar.innerHTML = 'Crear'
            titulo.innerHTML = "Nuevo Dueño";
        });
    }
}

function resetModal() {
    indice.value = '';
    nombre.value = '';
    apellido.value = '';
    identificacion.value = '';
    btnGuardar.innerHTML = 'Crear'
}

function eliminar(index) {

    return function clickEnEliminar() {
        $('#exampleModalCenter2').modal('toggle');
        const dueno = duenos[index];
        indice.value = index;
        nombre.value = dueno.nombre;
        apellido.value = dueno.apellido;
        pais.value = dueno.pais;
        identificacion.value = dueno.identificacion;

        $("#btn-eliminar2").on("click", function() {
            duenos = duenos.filter((dueno, indice) => indice !== index);
            listarDuenos();
            indice.value = '';
            nombre.value = '';
            apellido.value = '';
            pais.value = 'País';
            identificacion.value = '';
            titulo.innerHTML = "Nuevo Dueño";
            btnGuardar.innerHTML = 'Guardar';
        });

        $("#btn-cerrar2").on("click", function() {
            indice.value = '';
            nombre.value = '';
            apellido.value = '';
            pais.value = 'País';
            identificacion.value = '';
            titulo.innerHTML = "Nuevo Dueño";
            btnGuardar.innerHTML = 'Guardar';
        });

        $("#btn-cerrar5").on("click", function() {
            indice.value = '';
            nombre.value = '';
            apellido.value = '';
            pais.value = 'País';
            identificacion.value = '';
            btnGuardar.innerHTML = 'Crear'
            titulo.innerHTML = "Nuevo Dueño";
        });
    }
}


listarDuenos();

form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;