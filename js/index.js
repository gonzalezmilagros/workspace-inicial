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
    location.replace("inicio.html")
  }


  function validacion(){
    alert("los datos ingresados no son válidos")
  }

  // function guardarEmail(){
  //    let usuario = {
  //     usuario: document.getElementById("email").value
  //    };

  //    localStorage.setItem("usuario", email);
  //   //  console.log(localStorage);
  // }

  // function mostrarEmail(){
     
  //   localStorage.getItem("email");

  //   document.getElementById("datos-usuario").innerHTML = usuario
  // }

  // console.log(mostrarEmail);