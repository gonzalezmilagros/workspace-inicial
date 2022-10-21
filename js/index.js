let email = document.getElementById("email");
let contraseña = document.getElementById("password")
let boton = document.getElementById("boton")
let usuario = []

boton.addEventListener("click", function(){
  if( email.value.length > 0 && contraseña.value.length > 6){
    guardarDatos();
    location.replace("inicio.html")
  } else {
    validacion();
  }
})

const validacion = () => {
  (<div class="alert alert-danger" role="alert" >
  Los datos ingresados son incorrectos
</div>)
  }

  const guardarDatos = () => {
    let valor = document.getElementById("email").value;
    usuario.push(valor);
    let usuario_json = JSON.stringify(usuario);
    localStorage.setItem("email", usuario_json);
  }

