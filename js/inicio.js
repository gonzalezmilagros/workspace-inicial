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

function mostrarDatos(){
    if(localStorage.getItem("email")){
        usuario_json = localStorage.getItem("email");
        email = JSON.parse(usuario_json);

        document.getElementById("datos-usuario").innerHTML =
           "usuario: " + email + "<br>"; 
    }
}

mostrarDatos();
 

