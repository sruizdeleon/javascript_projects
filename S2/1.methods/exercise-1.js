/* Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .includes de javascript. */

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];

let filter = 'Camiseta';
for (let product of products) {
    if (product.includes(filter)) {
        console.log(product);
    }
}

/* Otra forma de hacerlo con expresiones regulares */
/*
products.forEach(product=>{
    if(/camiseta/i.test(product)){
        console.log(product);
    }
})

 */