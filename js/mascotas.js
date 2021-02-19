const listaMascotas=document.getElementById('lista-mascotas');
const tipo=document.getElementById('tipo');
const nombre=document.getElementById('nombre');
const dueno=document.getElementById('dueno');
const form= document.getElementById('form');
const indice= document.getElementById('indice');
const btnGuardar=document.getElementById('btn-guardar');


let mascotas=[
    {
        tipo: "Perro",
        nombre: "manchas",
        dueno: "Esteban"
    },
    {
        tipo: "Gato",
        nombre: "Loky",
        dueno: "Felix"
    }
];

function listarMascotas() {
    const htmMascotas = mascotas.map((mascota, index)=>`<tr>
    <th scope="row">${index}</th>
    <td>${mascota.tipo}</td>
    <td>${mascota.nombre}</td>
    <td>${mascota.dueno}</td>
    <td>
        <div class="btn-group" role="group" aria-label="Basic example">
           <button type="button" class="btn btn-info editar"><i class="fas fa-edit"></i></button>
           <button type="button" class="btn btn-danger eliminar"><i class="fas fa-trash-alt"></i></button>
          
      </div>
    </td>
  </tr>`).join("");
  listaMascotas.innerHTML = htmMascotas;
 Array.from(document.getElementsByClassName('editar')).forEach((botonEditar, index)=> botonEditar.onclick= editar(index));
 Array.from(document.getElementsByClassName('eliminar')).forEach((botonEliminar, index)=> botonEliminar.onclick= eliminar(index));
}

function enviarDatos(evento) {
    evento.preventDefault();
    const datos = {
        tipo: tipo.value,
        nombre: nombre.value,
        dueno: dueno.value,                                                                                                        
    };
    const accion = btnGuardar.innerHTML;
    switch(accion){
        case 'Editar':
            //Editar
            mascotas[indice.value] = datos;
            break;
            default:
                //crear
                mascotas.push(datos);
                break;
    }
 listarMascotas();
 resetModal();
}
function editar(index){
    return function cuandoHagaClick (){
    btnGuardar.innerHTML = 'Editar'
    $('#exampleModalCenter').modal('toggle');
    const mascota = mascotas[index];
    nombre.value = mascota.nombre;
    dueno.value = mascota.dueno;
    tipo.value = mascota.tipo;
    indice.value = index;
    
   }
}

function resetModal(){
    nombre.value = '';
    dueno.value = '';
    tipo.value = '';
    indice.value ='';
    btnGuardar.innerHTML ='Crear'
}
function eliminar(index){
    return function clickenEliminar(){
        
        mascotas = mascotas.filter((mascota, indiceMascota)=>indiceMascota !==index);
        listarMascotas();
    }
   

}

listarMascotas();

form.onsubmit = enviarDatos;
btnGuardar.onclick= enviarDatos;