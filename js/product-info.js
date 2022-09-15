// let listaInfo = []
// arrayInfo;


// function showProductInfo() {
//     document.getElementById("product-info").innerHTML = "Nombre: " + data.name;
//  }
       


// document.addEventListener("DOMContentLoaded", function () {
//     getJSONData(PRODUCT_INFO_URL + localStorage.getItem("InfoID") + EXT_TYPE).then(resultado => {
//         if (resultado.status == "ok") {
//             listaInfo = resultado.data;
//             showProductInfo(listaInfo);
//         } else {
//             alert("algo salió mal: " + resultado.data)
//         }
//     });
// })

fetch(PRODUCT_INFO_URL + localStorage.getItem("InfoID") + EXT_TYPE)
     .then(respuesta => respuesta.json())
     .then(datos =>{

        document.getElementById("product-name").innerHTML = " " + datos.name; 
        document.getElementById("product-cost").innerHTML = "Precio " + datos.currency + datos.cost;
        document.getElementById("product-description").innerHTML = "Descripción " + datos.description;
        document.getElementById("product-category").innerHTML = "Categoría " + datos.category;
        document.getElementById("product-soldCount").innerHTML = "Cantidad de vendidos " + datos.soldCount;
        document.getElementById("images").innerHTML = " " + datos.images[0];

        
     })