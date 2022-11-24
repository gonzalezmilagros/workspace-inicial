// -----------------------------------------------------------------------------------------------------------------------------//
// se le atribuye a los numeros la cantidad de estrella que se deben mostrar en pantalla.
// -----------------------------------------------------------------------------------------------------------------------------//

star = {
   datos: false,
   1: `<span class="fa fa-star checked"></span>
   <span class="fa fa-star"></span>
   <span class="fa fa-star"></span>
   <span class="fa fa-star"></span>
   <span class="fa fa-star"></span>`,
   2: `<span class="fa fa-star checked"></span>
   <span class="fa fa-star checked"></span>
   <span class="fa fa-star"></span>
   <span class="fa fa-star"></span>
   <span class="fa fa-star"></span>`,
   3: `<span class="fa fa-star checked"></span>
   <span class="fa fa-star checked"></span>
   <span class="fa fa-star checked"></span>
   <span class="fa fa-star"></span>
   <span class="fa fa-star"></span>`,
   4: `<span class="fa fa-star checked"></span>
   <span class="fa fa-star checked"></span>
   <span class="fa fa-star checked"></span>
   <span class="fa fa-star checked"></span>
   <span class="fa fa-star"></span>`,
   5: `<span class="fa fa-star checked"></span>
   <span class="fa fa-star checked"></span>
   <span class="fa fa-star checked"></span>
   <span class="fa fa-star checked"></span>
   <span class="fa fa-star checked"></span>`,
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
      <div class="carousel-item">
      <img src="${img}" alt="..." class="d-block w-100">
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
      <button type="button" class="btn btn-outline-success" id="redirectCart"><img src="/img/icons8-carrito-de-compras-32.png" alt="..."><a href="/cart.html"></a></button><hr>
      <h4>Precio</h4>
      <h6 class="card-muted">${data.cost} ${data.currency}<h6>
      <h4>Descripción</h4>
      <h6 class="card-muted">${data.description}<h6>
      <h4>Categoría</h4>
      <h6 class="card-muted">${data.category}<h6>
      <h4>Cantidad de vendidos</h4>
      <h6 class="card-muted">${data.soldCount}<h6>
      <h4 id="pImages">Imagenes ilustrativas</h4>
      <div class="img-carrusel">
         <div class="d-flex justify-content-center"> 
            <div id="carouselExampleControls" class="carousel slide col-xs-4" style="width: 10vw; min-width: 250px; border-rigth:5rem;"  data-bs-ride="carousel">
               <div class="carousel-inner">
                  <div class="carousel-item active">
                     <img src="${data.images[0]}" class="d-block w-100" alt="...">
                  </div>
                  ${renderImg(data.images)}
               </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
               <span class="carousel-control-prev-icon" aria-hidden="true"></span>
               <span class="visually-hidden">Previous</span>
            </button>
         </div>
      </div>
      <h4 id="pRelacionados">Productos relacionados</h4>
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
//Mostrar los comentarios de producto
// -----------------------------------------------------------------------------------------------------------------------------//


const showComments = () => {
   let htmlComment = `
   <h4 id="pcoment">Comentarios</h4>
   `
   for (let i = 0; i < dato.length; i++) {
      let comment = dato[i]
      htmlComment += `
      <div id="comments" class="row g-3 comentariosT">
         <div id="card-comment">
            ${comment.user}  ${comment.dateTime} ${star[comment.score]} <br>
            ${comment.description} <br><br>
         </div>
      </div>
   
       `
   }


   document.getElementById("content-comment").innerHTML = htmlComment;
}


// -----------------------------------------------------------------------------------------------------------------------------//
//Desafío: Comentario nuevo
// -----------------------------------------------------------------------------------------------------------------------------//

let text = document.getElementById('UsuComment');
let point = document.getElementById('UsuPoint');
let btnUsu = document.getElementById('UsuBoton');
let commentUsu = [];


// Botón de enviar

btnUsu.addEventListener('click', () => {
   if (text.value.length > 1 && point.value > 0) {
      commentSS();
      mostrarSS();
   }
})


// Guardar datos


const commentSS = () => {
   let textSS = document.getElementById('UsuComment').value;
   let pointSS = document.getElementById('UsuPoint').value;
   commentUsu.push(textSS)
   commentUsu.push(pointSS)
   sessionStorage.setItem('comentario', commentUsu);
}


const mostrarSS = () => {
   if (sessionStorage.getItem("comentario")) {
      comentario = sessionStorage.getItem("comentario");
      document.getElementById("content-comment").innerHTML = comentario;
   }
}

mostrarSS();