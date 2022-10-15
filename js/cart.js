const USER_CART = "https://japceibal.github.io/emercado-api/user_cart/25801.json";
let listaCart = [];

document.addEventListener("DOMContentLoaded", () => {
   getJSONData(USER_CART).then(resultado => {
         if (resultado.status == "ok") {
            listaCart = resultado.data.articles;
            cartProducts(listaCart);
            // console.log(resultado);
        } else {
            alert("algo salió mal: " + resultado.data.articles)
        }
      })

   var container = document.getElementById("carritoProduct")


// -----------------------------------------------------------------------------------------------------------------------------//
// Función que muestra los productos en el carrito.
// -----------------------------------------------------------------------------------------------------------------------------//  


const cartProducts = (data) => {
   container.innerHTML += ''
   for (pCart in data) {
      container.innerHTML += `
      <li class="list-group-item" aria-current="true">
      ${data[pCart].name}    
      ${data[pCart].unitCost}
      </li>
      `
  }
}

});






