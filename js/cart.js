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

      inputSubtotal.oninput = function sub() {
        mySubtotal.innerHTML = inputSubtotal.value * 15200;
        subtotal2input.innerHTML = inputSubtotal.value * 15200;
      };

          
      quinceXciento.oninput = function quince() {
        shippingType.innerHTML = inputSubtotal.value * 15200 * 15 / 100;
        totalToPay.innerHTML = (inputSubtotal.value * 15200 * 15 / 100) + inputSubtotal.value * 15200 ;
      };

      sieteXciento.oninput = function siete() {
        shippingType.innerHTML = inputSubtotal.value * 15200 * 7 / 100;
        totalToPay.innerHTML = (inputSubtotal.value * 15200 * 7 / 100) + inputSubtotal.value * 15200 ;
      };

      cincoXciento.oninput = function cinco() {
        shippingType.innerHTML = inputSubtotal.value * 15200 * 5 / 100;
        totalToPay.innerHTML = (inputSubtotal.value * 15200 * 5 / 100) + inputSubtotal.value * 15200 ;
      };

     
      let input1 = document.getElementById("inputCard1");
      let input2 = document.getElementById("inputCard2");
      let input3 = document.getElementById("inputCard3");
      let input4 = document.getElementById("inputAccount");

      document.getElementById("radioCard").addEventListener("click", () => {
        input1.disabled= false 
        input2.disabled= false
        input3.disabled= false
          if (input4.disabled == false) {
            input4.disabled = true;
          }
      })

      document.getElementById("radioAccount").addEventListener("click", () => {
        input4.disabled = false
          if (input1.disabled == false && input2.disabled == false && input3.disabled == false) {
            input1.disabled = true;
            input2.disabled = true;
            input3.disabled = true;
          }
      })

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
      <form id="solicitud">
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
              <input class="form-check-input" name="envioEjemplo" type="radio" role="switch" id="quinceXciento" required>
              <label class="form-check-label" for="flexSwitchCheckDefault">Premium 2 a 5 días(15%)</label>
            </div>

            <div class="form-check form-switch">
              <input class="form-check-input" name="envioEjemplo" type="radio" role="switch" id="sieteXciento" required>
              <label class="form-check-label" for="flexSwitchCheckDefault">Express 5 a 8 días(7%)</label>
            </div>

            <div class="form-check form-switch">
              <input class="form-check-input" name="envioEjemplo" type="radio" role="switch" id="cincoXciento" required>
              <label class="form-check-label" for="flexSwitchCheckDefault">Standard 12 a 15 días(5%)</label>
            </div>
    
          <hr><h5>Dirección de envío</h5>

          <div class="row g-3">

            <div class="col-sm-10">
              <input type="text" class="form-control" placeholder="Calle" aria-label="Ciudad" required>
              <div id="streetFeedback" class="invalid-feedback">
              </div>
            </div>

            <div class="col-sm-5">
              <input type="text" class="form-control" placeholder="Número" aria-label="Estado" required>
              <div id="numberFeedback" class="invalid-feedback">
              </div>
            </div>

            <div class="col-sm-5">
              <input type="text" class="form-control" placeholder="Esquina" aria-label="Código postal" required>
              <div id="cornerFeedback" class="invalid-feedback">
              </div>
            </div>
    
          </div>
    
          <div class="col-sm-15">

            <hr><h5>Costo</h5>
    
              <div class="card card-body">
              <h6>Subtotal: &nbsp;${data[pCart].currency}<spam id="subtotal2input"></spam></h6>
              
              </div>

              <div class="card card-body">
              <h6>Costo de envío:${data[pCart].currency} <spam id="shippingType"></spam></h6>
              </div>

              <div class="card card-body">
              <h6>Total ($) ${data[pCart].currency} <spam id="totalToPay"></spam></h6>
              </div>

          </div>
    
          <div class="col-sm-5">
    
            <hr><h5>Forma de pago</h5>
            <a href="#" class="link-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Seleccionar</a><hr>

            <!-- Modal -->
              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">Formas de pago</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                  <div class="form modal-body row g-3">

                  <div class="col-sm-10">
                    <input type="radio" name="pago" id="radioCard" >Tarjeta de crédito</input><hr>
                  </div>

                  <div class="col-sm-5">
                    <label for="text">Número de tarjeta</label>
                    <input type="text" class="form-control" aria-label="text" id="inputCard1" required>
                  </div>

                  <div class="col-sm-5">
                    <label for="text" >Código de seg.</label>
                    <input type="text" class="form-control" aria-label="text" id="inputCard2" required>
                  </div>

                  <div class="col-sm-5">
                    <label for="text">Vencimiento(MM/AA)</label>
                    <input type="text" class="form-control" aria-label="text" id="inputCard3" required>
                  </div>

                  <div class="col-sm-10">
                    <input type="radio" name="pago" id="radioAccount">Transferencia bancaria</input><hr>
                  </div>

                  <div class="col-sm-5">
                    <label for="text">Número de cuenta</label>
                    <input type="text" class="form-control" aria-label="text" id="inputAccount" required>
                  </div>
                  
                </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-outline-primary" id="shareModal">Guardar</button>
                    </div>
                  </div>
               </div>
              </div>
    
          </div>

          <div>
          <button type="submit "class="btn btn-outline-primary">Finalizar la compra</button>
          </div>


      </div>
    </div>
  </div>
</div>
</form>
`
       }
    }  
});






