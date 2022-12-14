let listaProductos = []
let min = undefined //no está definida, o sea no está inicializada//
let max = undefined
let search = undefined;

// -----------------------------------------------------------------------------------------------------------------------------//
//Función que guarda el id del producto en el localStorage
// -----------------------------------------------------------------------------------------------------------------------------// 

function infoProducts(id){
    localStorage.setItem("InfoID", id);
    window.location = "product-info.html"
}


// ------------------------------------------------------------------------------------------------------------------------------//
// Con el for of recorremos el array y con innerHTML imprimimos en pantalla los elementos. 
// También aquí se realizan las condiciones para poder llevar a cabo los filtros.
// -----------------------------------------------------------------------------------------------------------------------------// 

function mostrarProductos(arrayProductos) {
    document.getElementById("productos").innerHTML = "";
    for (const producto of arrayProductos) {        
        producto.cost = parseInt(producto.cost);
        if ((min == undefined && max == undefined) || (producto.cost >= min && producto.cost <= max) ||
        (producto.cost >= min && max == undefined) || (producto.cost <= max && min == undefined)) {
            
        if (search == undefined || search == "" || producto.name.toLowerCase().indexOf(search.toLowerCase()) > -1) {
            
                let contenido = `
        <ul onclick="infoProducts(${producto.id})"> 
            <div class="container-lista-productos cursor-active">
                <div class="card-lista-productos">
                    <div class="img-lista-productos">
                           <img class="img-autos" src="${producto.image}" alt="">
                     </div>
                     <div class="titulo-lista-productos">
                            ${producto.name}
                           -${producto.currency}
                            ${producto.cost}<br>
                            <div class="productos-descripcion">
                                ${producto.description}
                            </div>
                     </div> 
                     <div class="cantidad-vendidos-lista-productos">
                     <small class="text-valor"> ${producto.soldCount} vendidos </small>
                     </div>
                </div>
            </div>
        </ul>
        `;
        document.getElementById("productos").innerHTML += contenido;
    }
        }
 }
       
}

// -----------------------------------------------------------------------------------------------------------------------------//
// Función que se ejecuta al cargar la página. La cual nos trae los elementos que pedimos con getJSONData.
// -----------------------------------------------------------------------------------------------------------------------------// 


document.addEventListener("DOMContentLoaded", function () {
    getJSONData(PRODUCTS_URL + localStorage.getItem("catID") + EXT_TYPE).then(resultado => {
        if (resultado.status == "ok") {
            listaProductos = resultado.data.products;
            mostrarProductos(listaProductos);
            // console.log(resultado);
        } else {
            alert("algo salió mal: " + resultado.data.products)
        }
    });


// -----------------------------------------------------------------------------------------------------------------------------//
//Filtros de la página.
// -----------------------------------------------------------------------------------------------------------------------------// 

    document.getElementById("filtrar").addEventListener("click", function(){
        min = document.getElementById("rango-min").value != "" ? parseInt(document.getElementById("rango-min").value) : undefined;
        max = document.getElementById("rango-max").value != "" ? parseInt(document.getElementById("rango-max").value) : undefined;
        mostrarProductos(listaProductos);
    })
    
    document.getElementById("limpiar").addEventListener("click", function() {
        min = undefined;
        max = undefined;
        document.getElementById("rango-min").value = "";
        document.getElementById("rango-max").value = "";
        mostrarProductos(listaProductos);
        
    })

    document.getElementById("sortPrecioDesc").addEventListener("click", function(){
        listaProductos.sort(function (a, b) {
            return parseInt(b.cost) - parseInt(a.cost);
        })
        mostrarProductos(listaProductos);
    })

    document.getElementById("sortPrecioAsc").addEventListener("click", function(){
        listaProductos.sort(function (a, b) {
            return parseInt(a.cost) - parseInt(b.cost);
        })
        mostrarProductos(listaProductos);
    })

    document.getElementById("sortRelevDesc").addEventListener("click", function(){
        listaProductos.sort(function (a, b) {
            return parseInt(b.soldCount) - parseInt(a.soldCount);
        })
        mostrarProductos(listaProductos);
    })

    document.getElementById("buscador").addEventListener("input", function () {
        search = document.getElementById("buscador").value;
        mostrarProductos(listaProductos);
    })
})




// parseInt: transforma strings numéricos en números