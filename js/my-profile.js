let btnProfile = document.getElementById('btn-profile');
let nombreV = [];

let nombre = document.getElementById('nombreProfile');
let nombre2 = document.getElementById('nombre2Profile');
let apellido = document.getElementById('apellidoProfile');
let apellido2 = document.getElementById('apellido2Profile');
let cel = document.getElementById('celProfile');
let emailP = document.getElementById('inputProfile')


const mostrarDatosProfile = () => {
  if(localStorage.getItem("email")){

      usuario_json = localStorage.getItem("email");
      emailP = JSON.parse(usuario_json);

      document.getElementById("inputProfile").innerHTML = emailP;
  }
}

mostrarDatosProfile();



// -----------------------------------------------------------------------------------------------------------------------------//
// escuha del botón y realiza la validación para que los campos de nombre, apellido y email estén completo
// -----------------------------------------------------------------------------------------------------------------------------//


btnProfile.addEventListener('click', () => {
   if (nombre.value.length > 0 && apellido.value.length > 0)  {
    guardarDatosProfile()
    exito()
   }else{
    errorAlert()
   }
})

// -----------------------------------------------------------------------------------------------------------------------------//
// función para guardar los datos de los input en el localStorage.
// -----------------------------------------------------------------------------------------------------------------------------//


const guardarDatosProfile = () => {
    let nombreL = document.getElementById("nombreProfile").value;
    nombreV.push(nombreL);
    let nombreV_json = JSON.stringify(nombreV);
    localStorage.setItem("nombre", nombreV_json);
  }


// -----------------------------------------------------------------------------------------------------------------------------//
// función para qeu cuando carga la página verifique si hay datos en el localStorage
// -----------------------------------------------------------------------------------------------------------------------------//





document.addEventListener('DOMContentLoaded', () => {
  if( emailP = "email" in localStorage){
     alert("gil")
  }else { 
    alert('no'); }
})


// -----------------------------------------------------------------------------------------------------------------------------//
// alertas de verificación
// -----------------------------------------------------------------------------------------------------------------------------//


function errorAlert(){
   let error = document.getElementById("alerts-profile")
     
     error.innerHTML = `
     <div class="alert alert-danger alert-dismissible fade show" id="alert-error" role="alert">
           Algo salió mal...
     <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
     </div>`
   }

   function exito() {
       let error = document.getElementById("alerts-profile")
     
     error.innerHTML = `
     <div class="alert alert-success alert-dismissible fade show" id="alert-success" role="alert">
           Exito!!!
     <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
     </div>`
   }