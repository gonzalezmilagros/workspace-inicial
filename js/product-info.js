let dato1;
let dato2;
let arrayImg= [];



// No se como llamarle a esto, pero vamos a decir que se le atribuye  a los numeros lo que se debe imprimir en pantalla
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
       ${comment.user}  ${comment.dateTime}  ${star[comment.score]} <br>
       ${comment.description} <br><br>
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

      //Recorremos el array e imprimimos las imagenes en pantalla.

      let img = "";
      for(let i=0; i < dato1.length; i++){
         let imagen = dato1[i];
         img += `
         <di>
         <img src="${imagen.images[i]}" alt="" class"img">
         </div>
         `
      }
      console.log(dato1);
      document.getElementById("images").innerHTML += img;
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

