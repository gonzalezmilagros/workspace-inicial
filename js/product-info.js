let dato1;
let dato2;
let arrayImg = "dato1.images";



// No se como llamarle a esto, pero vamos a decir que se le atribuye a los numeros lo que se debe imprimir en pantalla
star = {
  datos : false,
1:`<span class="fa fa-star checked"></span>
   <span class="fa fa-star"></span>
   <span class="fa fa-star"></span>
   <span class="fa fa-star"></span>
   <span class="fa fa-star"></span>`,
2:`<span class="fa fa-star checked"></span>
   <span class="fa fa-star checked"></span>
   <span class="fa fa-star"></span>
   <span class="fa fa-star"></span>
   <span class="fa fa-star"></span>`,
3:`<span class="fa fa-star checked"></span>
   <span class="fa fa-star checked"></span>
   <span class="fa fa-star checked"></span>
   <span class="fa fa-star"></span>
   <span class="fa fa-star"></span>`,
4:`<span class="fa fa-star checked"></span>
   <span class="fa fa-star checked"></span>
   <span class="fa fa-star checked"></span>
   <span class="fa fa-star checked"></span>
   <span class="fa fa-star"></span>`,
5:`<span class="fa fa-star checked"></span>
   <span class="fa fa-star checked"></span>
   <span class="fa fa-star checked"></span>
   <span class="fa fa-star checked"></span>
   <span class="fa fa-star checked"></span>`,
}

function showComments(){

   // Se recorre el array y se muestran los comentarios de los productos

   let htmlContentToAppend = "";
for(let i = 0; i < dato2.length; i++){
   let comment = dato2[i];

       htmlContentToAppend += `
       <div id="card-comment">
       ${comment.user}  ${comment.dateTime}  ${star[comment.score]} <br>
       ${comment.description} <br><br>
       </div>
       `
   }
   
   document.getElementById("comentarios").innerHTML = htmlContentToAppend;
   
}


function showInfo(){

    // Con innerHTML se imprime los objetos del json
   
        document.getElementById("product-name").innerHTML = " " + dato1.name; 
        document.getElementById("product-cost").innerHTML = " " + dato1.currency + dato1.cost;
        document.getElementById("product-description").innerHTML = " " + dato1.description;
        document.getElementById("product-category").innerHTML = " " + dato1.category;
        document.getElementById("product-soldCount").innerHTML = " " + dato1.soldCount;

      //   Mostrar imagenes!
      //   document.getElementById("imagenes0").innerHTML = " " + `<img src="${dato1.images[0]}" alt=""></img>`
      //   document.getElementById("imagenes1").innerHTML = " " + `<img src="${dato1.images[1]}" alt=""></img>`
      //   document.getElementById("imagenes2").innerHTML = " " + `<img src="${dato1.images[2]}" alt=""></img>`
      //   document.getElementById("imagenes3").innerHTML = " " + `<img src="${dato1.images[3]}" alt=""></img>`

      // Recorremos el array e imprimimos las imagenes en pantalla.
       let htmlImagenes = "";
      for(let j=0; j < arrayImg.length; j++){
         htmlImagenes += `
         <div class="col">
         <img src="${arrayImg[j]}" alt="" class"img">
         </div>
         `
      }
      document.getElementById("imagenes-info").innerHTML += htmlImagenes;
      console.log(arrayImg);
}
   

        

fetch(PRODUCT_INFO_URL + localStorage.getItem("InfoID") + EXT_TYPE)
     .then(respuesta => respuesta.json())
     .then(result1 => {
        dato1 = result1;
      //   console.log(result1);
        fetch(PRODUCT_INFO_COMMENTS_URL + localStorage.getItem("InfoID") + EXT_TYPE)
            .then(respuesta => respuesta.json())
            .then(result2 => {
               dato2 = result2;
               showInfo()
               showComments()
        })
   })

