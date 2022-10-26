const USER_CART = "https://japceibal.github.io/emercado-api/user_cart/25801.json";
let listaCart = [];

document.addEventListener("DOMContentLoaded", () => {
   getJSONData(USER_CART).then(resultado => {
      if (resultado.status == "ok") {
         listaCart = resultado.data.articles;
         cartProducts(listaCart);

  //  -----------------------------------------------------------------------------------------------------------------------------//
  //  Eventos oninputs.
  //  -----------------------------------------------------------------------------------------------------------------------------// 

          inputSubtotal.oninput = function() {
          mySubtotal.innerHTML = inputSubtotal.value * 15200;
        };
          
        




        } else {
         alert("algo salió mal: " + resultado.data.articles)
      }
   })


   var container = document.getElementById("carritoProduct")

   

  //  -----------------------------------------------------------------------------------------------------------------------------//
  //  Función que muestra los productos en el carrito y el formulario de envío.
  //  -----------------------------------------------------------------------------------------------------------------------------//  
   
   
   
    const cartProducts = (data) => {
    container.innerHTML += ''
      for (pCart in data) {
         container.innerHTML += `

        <div class="card" style="width: 14rem;">

            <img class="card-img-top" src="${data[pCart].image}" alt="Card image cap">
          <div class="card-body ">

            <h5 class="card-title"><strong>${data[pCart].name}</strong></h5>

            <p class="card-text">

              <p>Precio: ${data[pCart].currency}${data[pCart].unitCost}</p><hr>

              <p>Cantidad: <input type="number" id="inputSubtotal" min="1" style="width: 5rem;" placeholder="1"></p><hr>

              <p">Subtotal: ${data[pCart].currency}<span id="mySubtotal"</span></p>

            </p>
          </div>

        <div class="position-relative"><hr><br>
        <button class="btn btn-outline-primary position-relative top-50 start-50 translate-middle" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Comprar</button>
        </div>

        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">

        <div class="offcanvas-header">
          <h4 class="offcanvas-title" id="offcanvasRightLabel">${data[pCart].name}</h4>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div class="offcanvas-body">

          <hr><h5>Tipos de envío</h5>

            <div class="form-check form-switch">
              <input class="form-check-input" name="envioEjemplo" type="radio" role="switch" id="quinceXciento">
              <label class="form-check-label" for="flexSwitchCheckDefault">Premium 2 a 5 días(15%)</label>
            </div>

            <div class="form-check form-switch">
              <input class="form-check-input" name="envioEjemplo" type="radio" role="switch" id="sieteXciento">
              <label class="form-check-label" for="flexSwitchCheckDefault">Express 5 a 8 días(7%)</label>
            </div>

            <div class="form-check form-switch">
              <input class="form-check-input" name="envioEjemplo" type="radio" role="switch" id="cincoXciento">
              <label class="form-check-label" for="flexSwitchCheckDefault">Standard 12 a 15 días(5%)</label>
            </div>
    
          <hr><h5>Dirección de envío</h5>

          <div class="row g-3">

            <div class="col-sm-10">
              <input type="text" class="form-control" placeholder="Calle" aria-label="Ciudad">
            </div>

            <div class="col-sm-5">
              <input type="text" class="form-control" placeholder="Número" aria-label="Estado">
            </div>

            <div class="col-sm-5">
              <input type="text" class="form-control" placeholder="Esquina" aria-label="Código postal">
            </div>
    
          </div>
    
          <div class="col-sm-15">

            <hr><h5>Costo</h5>
    
              <div class="card card-body">
              <h6>Subtotal</h6>
              <p>Costo unitario del producto por cantidad.</p>
              <ul id="subtotal2input"></ul>
              </div>

              <div class="card card-body">
              <h6>Costo de envío</h6>
              <p>Según el tipo de envío.</p>
              </div>

              <div class="card card-body">
              <h6>Total ($)</h6>
              <p>Costo unitario del producto por cantidad</p>
              </div>

          </div>
    
          <div class="col-sm-5">
    
            <hr><h5>Forma de pago</h5>
    
          </div>

      </div>
    </div>
  </div>
</div>
`
       }
    }  
});




