const USER_CART = "https://japceibal.github.io/emercado-api/user_cart/25801.json";

fetch(PRODUCT_INFO_URL + `25801` + EXT_TYPE)
            .then(respuesta => respuesta.json())
            .then(result => {
               dato = result;
               showComments();
               // console.log(dato);
})
