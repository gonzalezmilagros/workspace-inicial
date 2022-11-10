let btnProfile = document.getElementById('btn-profile');
let usuario2 = [];

let nombre = document.getElementById('nombreProfile');
let nombre2 = document.getElementById('nombre2Profile');
let apellido = document.getElementById('apellidoProfile');
let apellido2 = document.getElementById('apellido2Profile');
let cel = document.getElementById('celProfile');
let emailP = document.getElementById('datos-usuario')



btnProfile.addEventListener('click', () => {
   if (nombre.value.length > 0 && apellido.value.length > 0 ) {
    guardarDatosProfile()
   }else{
    alert('hola')
   }
})


const guardarDatosProfile = () => {
    let nombreL = document.getElementById("nombreProfile").value;
    let apellidoL = document.getElementById("apellidoProfile").value;
    let emailP = document.getElementById("datos-usuario").value;
    usuario2.push(nombreL);
    usuario2.push(apellidoL);
    let usuario_json = JSON.stringify(usuario2);
    localStorage.setItem("email", usuario_json);
  }
