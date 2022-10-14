const productCart = () => {
   window.location = "cart.html"
 }

// -----------------------------------------------------------------------------------------------------------------------------//
//Función que guarda el id del producto en el localStorage y redirecciona a la página de info del producto
// -----------------------------------------------------------------------------------------------------------------------------//


function productoRelated(id) {
   localStorage.setItem("InfoID", id);
   window.location = "product-info.html"
}



// -----------------------------------------------------------------------------------------------------------------------------//

document.addEventListener("DOMContentLoaded", () => {
   getJSONData(PRODUCT_INFO_URL + localStorage.getItem("InfoID") + EXT_TYPE)
      .then(e => {
         render(e.data)
         // console.log(e);
      })

   var container = document.getElementById("contenedor")

// -----------------------------------------------------------------------------------------------------------------------------//
//Función con un for que recorre el array de imagenes ilustrativas de los productos
// -----------------------------------------------------------------------------------------------------------------------------//   

   const renderImg = (images) => {
      let html = ``
      for (let i = 0; i < images.length; i++) {
         let img = images[i]
         html += 
         `
      <div class="product-img">
      <img src="${img}" alt="...">
      </div>
         `
      }
      return html;
   }

// -----------------------------------------------------------------------------------------------------------------------------//
//Función con un for of que muestra los productos relacionados
// -----------------------------------------------------------------------------------------------------------------------------//   
 
   const renderRelated = (relatedProducts) => {
      let htmlRelacionado = ``
      for (relacion of relatedProducts) {
         htmlRelacionado += `
      <div onclick="productoRelated(${relacion.id})" class="product-img related">
      <div class="card cursor-active" style="width: 18rem;" ">
  <img src="${relacion.image}" class="card-img-top img" alt="...">
  <div class="card-body">
    <p class="card-text">${relacion.name}</p>
  </div>
</div>
</div>
      `
      }

      return htmlRelacionado;
   }


// -----------------------------------------------------------------------------------------------------------------------------//
//Función que muestra los datos de los productos las images ilustrativas y de los artículos relacionados.
// -----------------------------------------------------------------------------------------------------------------------------//   


   const render = (data) => {
      container.innerHTML += `
      <div class="card-body">
      <h2 class="card-title">${data.name}</h2>
      <button type="button" class="btn btn-outline-success" id="redirectCart"onclick="productCart"><img src="/img/icons8-carrito-de-compras-32.png" alt="..."></button><hr>
      <h4>Precio</h4>
      <h6 class="card-muted">${data.cost} ${data.currency}<h6>
      <h4>Descripción</h4>
      <h6 class="card-muted">${data.description}<h6>
      <h4>Categoría</h4>
      <h6 class="card-muted">${data.category}<h6>
      <h4>Cantidad de vendidos</h4>
      <h6 class="card-muted">${data.soldCount}<h6>
      <h4>Imagenes ilustrativas</h4>
      <div class="img">
      ${renderImg(data.images)}
      </div>
      <h4>Productos relacionados</h4>
      <div>
      ${renderRelated(data.relatedProducts)}
      </div>
      `
   }

})


// -----------------------------------------------------------------------------------------------------------------------------//
//Petición del fetch para traer los datos del json de PRODUCT_INFO_COMMENTS_URL
// -----------------------------------------------------------------------------------------------------------------------------//   


fetch(PRODUCT_INFO_COMMENTS_URL + localStorage.getItem("InfoID") + EXT_TYPE)
            .then(respuesta => respuesta.json())
            .then(result => {
               dato = result;
               showComments();
               // console.log(dato);
})

// -----------------------------------------------------------------------------------------------------------------------------//
//Mostrar los comentarios deproducto
// -----------------------------------------------------------------------------------------------------------------------------//


const showComments = () => {
   let htmlComment = ``
   for (let i = 0; i < dato.length; i++) {
      let comment = dato[i]
      htmlComment += `
      
      <div id="comments">
       <div id="card-comment">
       ${comment.user}  ${comment.dateTime}  ${comment.score} <br>
       ${comment.description} <br><br>
       </div>
       </div>
       `
   }
   document.getElementById("content-comment").innerHTML = htmlComment;
}
