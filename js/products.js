let listaProductos = []
let min = undefined //no está definida, o sea no está inicializada//
let max = undefined

function mostrarProductos(arrayProductos) {
    document.getElementById("productos").innerHTML = "";
    for (const producto of arrayProductos) {
        producto.cost = parseInt(producto.cost);
        if ((min == undefined && max == undefined) || (producto.cost >= min && producto.cost <= max) ||
        (producto.cost >= min && max == undefined) || (producto.cost <= max && min == undefined)) {
            let contenido = `
        <ul>
            <div class="container-lista-productos">
                <div class="card-lista-productos">
                    <div class="img-lista-productos">
                           <img class="img-autos" src="${producto.image}" alt="${producto.id}">
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


document.addEventListener("DOMContentLoaded", function () {
    getJSONData(PRODUCTS_URL + localStorage.getItem("catID") + EXT_TYPE).then(resultado => {
        if (resultado.status == "ok") {
            listaProductos = resultado.data.products;
            mostrarProductos(listaProductos);
        } else {
            alert("algo salió mal: " + resultado.data.products)
        }
    })


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

})




// parseInt: transforma strings numéricos en números