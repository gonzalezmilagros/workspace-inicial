function mostrarInfo(arrayInfo) {
    document.getElementById("products-info").innerHTML = "";
    for (const productoInfo of arrayInfo) {
            let contenido = `
        <li> 
            <div class="container-info">
            ${productoInfo.name}
            Precio
            ${productoInfo.cost}
            Descripción
            ${productoInfo.description}
            Categoría 
            ${productoInfo.category}
            Cantidad de vendidos
            ${productoInfo.soldCount}
            Imágenes ilustrativas 
            ${productoInfo.images}
            </div>
        </li>
        `;
        document.getElementById("products-info").innerHTML += contenido;
    }
 }
console.log(mostrarInfo);


document.addEventListener("DOMContentLoaded", function () {
    getJSONData(PRODUCT_INFO_URL + localStorage.getItem("ProductID") + EXT_TYPE).then(resultado => {
        if (resultado.status == "ok") {
            listaInfo = resultado.data;
            mostrarInfo(listaInfo);
        } else {
            alert("algo salió mal: " + resultado.data)
        }
    })
})