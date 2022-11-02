const USER_CART = "https://japceibal.github.io/emercado-api/user_cart/25801.json";
let listaCart = [];
let form = document.getElementById("formularioValidacion")
let sendForm = false

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

      radioCard.oninput = function () {
        btnTerms.innerHTML = "Tarjeta de crédito" ;
        if (input1.value.lenght <= 0 && input2.value.lenght <= 0 && input3.value.lenght <= 0) {
          btnTerms.classList.add("link-danger");
        }
      }

      radioAccount.oninput = function () {
        btnTerms.innerHTML = "Transferencia bancaria" ;
          if (input4.value.lenght <= 0) {
            btnTerms.classList.add("link-danger");
          }
      }



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

         <div class="alert alert-success d-none" role="alert" id="alertCompra">
              La compra se ha realizado con exito
         </div>
      

      <!-- CARD QUE MUESTRA IMAGEN, NOMBRE Y PRECIO DEL PRODUCTO, ADEMÁS DE UN INPUT EN DONDE PONEMOS LA CANTIDAD QUE DESEAMOS COMPRAR-->

        <div class="card" style="width: 14rem;">

            <img class="card-img-top" src="${data[pCart].image}" alt="Card image cap">
          <div class="card-body ">

            <h5 class="card-title"><strong>${data[pCart].name}</strong></h5>

            <p class="card-text">

            <p>Precio: ${data[pCart].currency}${data[pCart].unitCost}</p><hr>
 
              <div >
                <p id="cant-p" >Cantidad:</p>
                <input class="form-control" type="number" id="inputSubtotal" style="width: 7rem;" min="1" required>
                  <div class="invalid-feedback">
                  Debes de seleccionar la cantidad de artículos
                  </div>
                  <div class="valid-feedback">
                  ¡Bien!
                  </div><hr>
              </div>
              
            <p">Subtotal: ${data[pCart].currency}<span id="mySubtotal"</span></p>

            </p>
          </div>



          <!-- BOTON "COMPRAR" QUE DESPLIEGA EL OFFCANVAS-->  

        <div class="position-relative"><hr><br>
        <button id="botonComprar" class="btn btn-outline-primary position-relative top-50 start-50 translate-middle" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Comprar</button>
        </div>




        <!-- OFFCANVAS DONDE SE MUESTRA EL NOMBRE DEL PRODUCTOS Y DATOS DE LA COMPRA  -->

        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">

        <div class="offcanvas-header">
          <h4 class="offcanvas-title" id="offcanvasRightLabel">${data[pCart].name}</h4>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>




        <div class="offcanvas-body">

        <!-- TIPOS DE ENVÍOS, CUANTO SALE SEGÚN LOS DÍAS QUE TARDA EL ENVÍO. -->

          <hr><h5>Tipos de envío</h5>

            <div class="form-check form-switch">
              <input class="form-check-input" name="envioEjemplo" type="radio" role="switch" id="quinceXciento" required>
              <label class="form-check-label" for="quinceXciento">Premium 2 a 5 días(15%)</label>
            </div>

            <div class="form-check form-switch">
              <input class="form-check-input" name="envioEjemplo" type="radio" role="switch" id="sieteXciento" required>
              <label class="form-check-label" for="flexSwitchCheckDefault">Express 5 a 8 días(7%)</label>
            </div>

            <div class="form-check form-switch">
              <input class="form-check-input" name="envioEjemplo" type="radio" role="switch" id="cincoXciento" required>
              <label class="form-check-label" for="flexSwitchCheckDefault">Standard 12 a 15 días(5%)</label>
            </div>




          
        <!-- DATOS DE LA DIRECCIÓN A DONDE SE ENVÍA EL PRODUCTO. -->    
    
          <hr><h5>Dirección de envío</h5>

          <div class="row g-3">

            <div class="col-sm-10">
              <input type="text" class="form-control" placeholder="Calle" aria-label="Ciudad" required id="inputStreet">
              <div class="invalid-feedback">
                Por favor ingrese los datos
              </div>
              <div class="valid-feedback">
                ¡Genial!
              </div>
            </div>

            <div class="col-sm-5">
              <input type="text" class="form-control" placeholder="Número" aria-label="Estado" required id="inputNumber">
              <div class="invalid-feedback">
              Por favor ingrese los datos
              </div>
              <div class="valid-feedback">
                ¡Genial!
              </div>
            </div>

            <div class="col-sm-5">
              <input type="text" class="form-control" placeholder="Esquina" aria-label="Código postal" required id="inputCorner">
              <div class="invalid-feedback">
                Por favor ingrese los datos
              </div>
              <div class="valid-feedback">
                ¡Genial!
              </div>
            </div>
    
          </div>
    



          <div class="col-sm-15">

          <!-- COSTOS DE LOS PRODUCTOS: SUBTOTAL, COSTO DE ENVÍO Y TOTAL A PAGAR -->  

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

          <!-- LINK QUE DESPLIEGA EL MODAL DE FORMAS DE PAGO  -->

             <hr><h5>Forma de pago</h5>
             <div>
             <button type="button" class="btn btn-link ps-2 form-control" data-bs-toggle="modal" data-bs-target="#exampleModal" id="btnTerms">Seleccionar</button><hr>
             <div class="invalid-feedback" >
                Por favor ingrese los datos
              </div>
              <div class="valid-feedback">
                ¡Genial!
              </div>
            </div>


            
          <!-- MODAL QUE MUESTRA LAS FORMAS DE PAGO: POR TARJETA DE CRÉDITO O TRANSFERENCIA BANCARIA. -->
            
              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">Formas de pago</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                  <div class="form modal-body row g-3">

                  <div class="col-sm-10">
                    <input type="radio" name="pago" id="radioCard" required>Tarjeta de crédito</input><hr>
                  </div>

                  <div class="col-sm-5">
                    <label for="text">Número de tarjeta</label>
                    <input type="text" class="form-control" aria-label="text" id="inputCard1" required>
                    <div class="invalid-feedback">
                      Por favor ingrese los datos
                    </div>
                    <div class="valid-feedback">
                      ¡Genial!
                    </div>
                  </div>

                  <div class="col-sm-5">
                    <label for="text" >Código de seg.</label>
                    <input type="text" class="form-control" aria-label="text" id="inputCard2" required>
                    <div class="invalid-feedback">
                      Por favor ingrese los datos
                    </div>
                    <div class="valid-feedback">
                      ¡Genial!
                    </div>
                  </div>

                  <div class="col-sm-5">
                    <label for="text">Vencimiento(MM/AA)</label>
                    <input type="text" class="form-control" aria-label="text" id="inputCard3" required>
                    <div class="invalid-feedback">
                      Por favor ingrese los datos
                    </div>
                    <div class="valid-feedback">
                      ¡Genial!
                    </div>
                  </div>

                  <div class="col-sm-10">
                    <input type="radio" name="pago" id="radioAccount" recuired>Transferencia bancaria</input><hr>
                  </div>

                  <div class="col-sm-5">
                    <label for="text">Número de cuenta</label>
                    <input type="text" class="form-control" aria-label="text" id="inputAccount" required>
                    <div class="invalid-feedback">
                      Por favor ingrese los datos
                    </div>
                    <div class="valid-feedback">
                      ¡Genial!
                    </div>
                  </div>
                  
                </div>
                  </div>
               </div>
              </div>
    
          </div>




        <!-- BOTÓN DE FINALIZAR COMPRA. AL PRECIONAR DICHO BOTÓN DEBE DE ALERTAR SI HAY ALGÚN DATO SIN LLENAR O INCORRECTO Y EN CASO DE QUE TODO SEA CORRECTO MANDAR UNA ALERTA QUE DIGA QUE LA COMPRA A SIDO REALIZADA CON EXITO -->

        <div class="col-12">
        <button class="btn btn-primary" type="submit" id="btnCompraFinal">Finalizar la compra.</button>
      </div>


      </div>
    </div>
  </div>
</div>
`
       }
    }  
});


//  -----------------------------------------------------------------------------------------------------------------------------//
//  VALIDACIÓN DE FORM
//  -----------------------------------------------------------------------------------------------------------------------------//  
 



form.addEventListener("submit", function (e) {
  sendForm = true
  document.getElementById("formularioValidacion").classList.add('was-validated')
  e.preventDefault();
  e.stopPropagation();
});








