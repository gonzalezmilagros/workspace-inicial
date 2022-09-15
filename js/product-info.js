let dato1;
let dato2;


// No se como llamarle a esto, pero vamos a decir que se le atribuye a a los numeros lo que se debe imprimir en pantalla
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

function showEverything(arrayComentarios){

    // Con innerHTML se imprime los objetos del json
   
    document.getElementById("product-name").innerHTML = " " + dato1.name; 
        document.getElementById("product-cost").innerHTML = "Precio " + dato1.currency + dato1.cost;
        document.getElementById("product-description").innerHTML = "Descripción " + dato1.description;
        document.getElementById("product-category").innerHTML = "Categoría " + dato1.category;
        document.getElementById("product-soldCount").innerHTML = "Cantidad de vendidos " + dato1.soldCount;
     
        // Aquí tenes que poner las imagenes pedazo de gila, porfis hacelo antes del domingo!!!

        // Se recorre el array y se imprime los elementos del mismo

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



fetch(PRODUCT_INFO_URL + localStorage.getItem("InfoID") + EXT_TYPE)
     .then(respuesta => respuesta.json())
     .then(result1 => {
        dato1 = result1;
        showEverything()
})

fetch(PRODUCT_INFO_COMMENTS_URL + localStorage.getItem("InfoID") + EXT_TYPE)
        .then(respuesta => respuesta.json())
        .then(result2 => {
            console.log(result2);
            dato2 = result2;
            showEverything()
        })

