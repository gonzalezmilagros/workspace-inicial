let email = document.getElementById("email");
let contraseña = document.getElementById("password")
let boton = document.getElementById("boton")
let usuario = []

boton.addEventListener("click", function(){
  if( email.value.length > 0 && contraseña.value.length > 0){
    guardarDatos();
    location.replace("inicio.html")
  } else {
    validacion();
  }
})

  function validacion(){
    alert("los datos ingresados no son válidos")
  }

  function guardarDatos (){
    let valor = document.getElementById("email").value;
    usuario.push(valor);
    let usuario_json = JSON.stringify(usuario);
    localStorage.setItem("email", usuario_json);
  }