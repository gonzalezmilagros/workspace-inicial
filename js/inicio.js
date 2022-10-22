// -----------------------------------------------------------------------------------------------------------------------------//
// Evento click el las imágenes del inicio que redirigen a sus dichas categorías
// -----------------------------------------------------------------------------------------------------------------------------// 

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});

// -----------------------------------------------------------------------------------------------------------------------------//
//Función que trae el dato del nombre de usuario guardado en localStorage y lo muestra en navbar.
// -----------------------------------------------------------------------------------------------------------------------------// 

const mostrarDatos = () => {
    if(localStorage.getItem("email")){
        usuario_json = localStorage.getItem("email");
        email = JSON.parse(usuario_json);

        document.getElementById("datos-usuario").innerHTML = email; 
    }
}

mostrarDatos();


// -----------------------------------------------------------------------------------------------------------------------------//
// Función que elimina el usuario del localStorage.
// -----------------------------------------------------------------------------------------------------------------------------// 

const eliminarUsuario = () => {
    mostrarDatos();
    localStorage.clear();
}


// -----------------------------------------------------------------------------------------------------------------------------//
// El nombre de usuario es un dropdown. Aquí con el evento click redireccionamos a diferentes páginas segun el botón enlace.
// -----------------------------------------------------------------------------------------------------------------------------// 


let cierre = document.getElementById("Sign-off");

cierre.addEventListener("click", function(){
      eliminarUsuario();
      location.replace("index.html")
  })

let carrito = document.getElementById("cart");

carrito.addEventListener("click", function(){
        location.replace("cart.html")
    })

let perfil = document.getElementById("profile");

perfil.addEventListener("click", function(){
          location.replace("my-profile.html")
      })
    
  
 

