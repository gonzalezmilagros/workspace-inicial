let email = document.getElementById("email");
let contraseña = document.getElementById("password")
let boton = document.getElementById("boton")

boton.addEventListener("click", function(){
  if( email.value.length > 0 && contraseña.value.length > 0){
    myFunction();
  } else {
    validacion();
  }
})


function myFunction() {
    location.replace("http://127.0.0.1:5500/inicio.html")
  }


  function validacion(){
    alert("los datos ingresados no son válidos")
  }