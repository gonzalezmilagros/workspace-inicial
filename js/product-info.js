let listaInfo = [];

function productoRelated(id){
   localStorage.setItem("InfoID", id);
    window.location = "product-info.html"
}

document.addEventListener("DOMContentLoaded", () => {
   getJSONData(PRODUCT_INFO_URL + localStorage.getItem("InfoID") + EXT_TYPE)
   .then(e => {
      render(e.data)
      // console.log(e);
   })

   var container = document.getElementById("contenedor")

   const renderImg = (images) =>{
      let html = ``
      for(let i = 0; i < images.length; i++){
         let img = images[i]
         html += `
         <div class=" product-img">
      <img class="img" src="${img}" alt="">
          </div>
         `
      }
      return html;
}

var container2 = document.getElementById("pRelated")


const renderRelated =(relatedProducts) =>{
   let htmlRelacionado = ``
   for(relacion of relatedProducts){
      htmlRelacionado += `
      <div onclick="productoRelated(${relacion.id})">
      <div class="card cursor-active" style="width: 18rem;" ">
  <img src="${relacion.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">${relacion.name}</p>
  </div>
</div>
</div>
      `
   }

   return htmlRelacionado;
}


      const render = (data) => {
      container.innerHTML += `
      <div class="card-body">
      <h2 class="card-title">${data.name}</h2><hr>
      <h4>Precio</h4>
      <h6 class="card-muted">${data.cost} ${data.currency}<h6>
      <h4>Descripción</h4>
      <h6 class="card-muted">${data.description}<h6>
      <h4>Categoría</h4>
      <h6 class="card-muted">${data.category}<h6>
      <h4>Cantidad de vendidos</h4>
      <h6 class="card-muted">${data.soldCount}<h6>
      <h4>Imagenes ilustrativas</h4>
      <div class="img" style="width=30px">
      ${renderImg(data.images)}
      </div>
      <div>
      ${renderRelated(data.relatedProducts)}
      </div>
      `
    }
   
})



