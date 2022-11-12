let btnProfile = document.getElementById('btn-profile');
let nombreV = [];

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
    nombreV.push(nombreL);
    let nombreV_json = JSON.stringify(nombreV);
    localStorage.setItem("nombre", nombreV_json);
    mostrarDatosProfile();
  }


  const mostrarDatosProfile = () => {
   if(localStorage.getItem("nombre")){
      nombreV_json = localStorage.getItem("nombre");
       nombreV = JSON.parse(nombreV_json);

       document.getElementById("jola").innerHTML = nombreV;
   }

}

mostrarDatosProfile();


document.addEventListener("DOMContentLoaded", function(){
   localStorage.getItem("nombre");
   mostrarDatosProfile();
});
