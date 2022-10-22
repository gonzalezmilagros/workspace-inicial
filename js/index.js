let email = document.getElementById("email");
let contraseña = document.getElementById("password")
let boton = document.getElementById("boton")
let usuario = []

// -----------------------------------------------------------------------------------------------------------------------------//
//Función de validación de los datos del login y que guarda el nombre de usuario en el localStorage.
// -----------------------------------------------------------------------------------------------------------------------------// 

boton.addEventListener("click", function(){
  if( email.value.length > 0 && contraseña.value.length > 6){
    guardarDatos();
    location.replace("inicio.html")
  }else{
    validacionLogin();
  }
})

// -----------------------------------------------------------------------------------------------------------------------------//
//Función que muestra una alerta si los datos no son correctos
// -----------------------------------------------------------------------------------------------------------------------------// 

const validacionLogin = () => {
  document.getElementById("alerta").style.display = "block"
}

// -----------------------------------------------------------------------------------------------------------------------------//
//Se crea la variable "closeL" para con el evento click cerrar dicha alerta.
// -----------------------------------------------------------------------------------------------------------------------------// 

let closeL = document.getElementById("cerrarAlerta")

closeL.addEventListener("click", function(){
  document.getElementById("alerta").style.display = "none"
})

// -----------------------------------------------------------------------------------------------------------------------------//
//Función que guarda los datos del usuario en el localStorage.
// -----------------------------------------------------------------------------------------------------------------------------// 

  const guardarDatos = () => {
    let valor = document.getElementById("email").value;
    usuario.push(valor);
    let usuario_json = JSON.stringify(usuario);
    localStorage.setItem("email", usuario_json);
  }

