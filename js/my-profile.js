let infoProfile = [];

let btnProfile = document.getElementById('btn-profile');

let nombre = document.getElementById('nombreProfile').value = localStorage.getItem("nombre");
let nombre2 = document.getElementById('nombre2Profile').value = localStorage.getItem("nombreDos");
let apellido = document.getElementById('apellidoProfile').value = localStorage.getItem("apellido");
let apellido2 = document.getElementById('apellido2Profile').value = localStorage.getItem("apellidoDos");
let phone = document.getElementById('phoneProfile').value = localStorage.getItem("phone");;
let emailP = document.getElementById('inputProfile').value = localStorage.getItem("email");





// -----------------------------------------------------------------------------------------------------------------------------//
// escuha del botón y realiza la validación para que los campos de nombre, apellido y email estén completo
// -----------------------------------------------------------------------------------------------------------------------------//


btnProfile.addEventListener('click', () => {

  let btnNombre = document.getElementById('nombreProfile');
  let btnApellido = document.getElementById('apellidoProfile');
  let btnEmail = document.getElementById('inputProfile');

   if (btnNombre.value.length > 0 && btnApellido.value.length > 0 && btnEmail.value.length > 0){
    nombreLS();
    nombre2LS();
    apellidoLS();
    apellido2LS();
    phoneLS();
   }else{
    errorAlert()
   }
})

// -----------------------------------------------------------------------------------------------------------------------------//
// función para guardar los datos de los input en el localStorage.
// -----------------------------------------------------------------------------------------------------------------------------//


const nombreLS = () => {
    let nombreL = document.getElementById('nombreProfile').value;
    infoProfile.push(nombreL);
    localStorage.setItem('nombre', nombreL);
  }


const nombre2LS = () => {
  let nombre2L = document.getElementById('nombre2Profile').value;
  localStorage.setItem('nombreDos', nombre2L)
}  

const apellidoLS = () => {
  let apellidoL = document.getElementById('apellidoProfile').value;
  localStorage.setItem('apellido', apellidoL)
}  

const apellido2LS = () => {
  let apellido2L = document.getElementById('apellido2Profile').value;
  localStorage.setItem('apellidoDos', apellido2L)
}  

const phoneLS = () => {
  let phoneL = document.getElementById('phoneProfile').value;
  localStorage.setItem('phone', phoneL)
}  



// -----------------------------------------------------------------------------------------------------------------------------//
// función para que cuando carga la página verifique si hay datos en el localStorage
// -----------------------------------------------------------------------------------------------------------------------------//


document.addEventListener('DOMContentLoaded', () => {
  if( emailP = "email" in localStorage){
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
           Debe de completar los campos obligatorios...
     <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
     </div>`
   }