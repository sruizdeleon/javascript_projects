/* Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array con las categorías
de las películas e imprime por consola el array de categorías. Ten en cuenta que las categorías no deberían repetirse.
Para filtrar las categorías puedes ayudarte de la función `.includes()`.*/


const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
];

let listCategories = new Array();

/* Iteramos el array movies y accedemos a la propiedad categories para guardarlas en un nuevo array listCategories */
for (let movie of movies) {
    for (let categorie of movie.categories) {
        listCategories.push(categorie);
    }
}

/* Iteramos el array listCategories con dos contadores i y j, vamos comprobando que no haya valores repetidos (salvo el valor mismo) y borramos los repetido. */
for (let i = 0; i < listCategories.length - 1; i++) {
    for (let j = i + 1; j < listCategories.length - 1; j++) {
        if (listCategories[i] === listCategories[j] && i !== j) {
            listCategories.splice(j, 1);
        }
    }
}

console.log(listCategories);
