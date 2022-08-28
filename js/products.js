// function mostrarProductos(arrayProductos) {
//     for (const producto of arrayProductos) {
//         let contenido = `
//         <ul>
//             <div class="container-lista-productos">
//                 <div class="card-lista-productos">
//                     <div class="img-lista-productos">
//                            <img class="img-autos" src="${producto.image}" alt="${producto.id}">
//                      </div>
//                      <div class="titulo-lista-productos">
//                             ${producto.name}
//                            -${producto.currency}
//                             ${producto.cost}<br>
//                             <div class="productos-descripcion">
//                                 ${producto.description}
//                             </div>
//                      </div> 
//                      <div class="cantidad-vendidos-lista-productos">
//                      <small class="text-valor"> ${producto.soldCount} vendidos </small>
//                      </div>
//                 </div>
//             </div>
//         </ul>
//         `;
//         document.getElementById("productos").innerHTML += contenido;
//     }
// }


// document.addEventListener("DOMContentLoaded", function () {
//     getJSONData(PRODUCTS_URL).then(resultado => {
//         // console.log(resultado);
//         if (resultado.status == "ok") {
//             let listaProductos = resultado.data.products;
//             mostrarProductos(listaProductos);
//             // console.log(listaProductos)
//         } else {
//             alert("algo salió mal: " + resultado.data.products)
//         }
//     })
// })



function mostrarProductos(arrayProductos) {
    for (const producto of arrayProductos) {
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

document.addEventListener("DOMContentLoaded", function () {
    getJSONData(PRODUCTS_URL).then(resultado => {
        // console.log(resultado);
        if (resultado.status == "ok") {
            let listaProductos = resultado.data;
            mostrarProductos(listaProductos);
            // console.log(listaProductos)
        } else {
            alert("algo salió mal: " + resultado.data)
        }
    })
})