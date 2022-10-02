// var listaInfo = []

// document.addEventListener("DOMContentLoaded", () =>{
//    petitions()
// });


// const petitions = async () => {
//    listaInfo = await fetch(PRODUCT_INFO_URL + localStorage.getItem("InfoID") + EXT_TYPE)
//    .then((e) => e.json())
//    .then((e) => e);
//    console.log(listaInfo);
// }



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
         <div class="card">
      <img class="" src="${img}" alt="">
          </div>
         `
      }
      return html;
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
      <div class="card product-img" style="width=30px">
      ${renderImg(data.images)}
      </div>
      `
    }
   
})

