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
   // Función que muestra los productos en el carrito y el formulario de envío.
   // -----------------------------------------------------------------------------------------------------------------------------//  


   const cartProducts = (data) => {
      container.innerHTML += ''
      for (pCart in data) {
         container.innerHTML += `
         <p>
  <button class="btn btn-outline-light boton-product" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
  <div class="container list-group-item product">
  <div class="row">
    <div class="col-1 infoP">
    <img src="${data[pCart].image}" alt="" class="img-cart">
    </div>
    <div class="col-2 infoP">
    ${data[pCart].name}
    </div>
    <div class="col-2 infoP">
    ${data[pCart].currency}${data[pCart].unitCost}
    </div>
    <div class="col-2 infoP">
    <input type="number" style="width:4rem; height:3rem;">
    </div>
    <div class="col-3 infoP">
    ${data[pCart].currency}${data[pCart].unitCost}
    </div>
  </div>
</div>
  </button>
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
  <h5>Tipos de envío</h5>
  <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
  <label class="form-check-label" for="flexSwitchCheckDefault">Premium 2 a 5 días(15%)</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
  <label class="form-check-label" for="flexSwitchCheckDefault">Express 5 a 8 días(7%)</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
  <label class="form-check-label" for="flexSwitchCheckDefault">Standard 12 a 15 días(5%)</label>
</div>
<h5>Dirección de envío</h5>
<div class="row g-3">
  <div class="col-sm-5">
    <input type="text" class="form-control" placeholder="Calle" aria-label="Ciudad">
  </div>
  <div class="col-sm-3">
    <input type="text" class="form-control" placeholder="Número" aria-label="Estado">
  </div>
  <div class="col-sm-5">
    <input type="text" class="form-control" placeholder="Esquina" aria-label="Código postal">
  </div>
</div>
</div>
</div>
`
   }
}
});
























      