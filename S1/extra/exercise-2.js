/* Usa un for para remplazar todas las comidas que no sean veganas con las comidas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante. */

const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];

const foodSchedule = [
    {name: "Salad", isVegan: true},
    {name: "Salmon", isVegan: false},
    {name: "Tofu", isVegan: true},
    {name: "Burger", isVegan: false},
    {name: "Rice", isVegan: true},
    {name: "Pasta", isVegan: true}
];

/* Creamos una variable índice para recorrer el array fruits. Usamos un bucle for of para iterar
el array foodSchedule en cada plato. Si alguno de los platos no es vegano, lo sustituimos por uno
del array fruits, cambiamos el valor veganoa a true y aumentamos la posición de fruit para no repetir plato. */
let index = 0;
for (let food of foodSchedule) {
    if(food.isVegan === false) {
        food.name = fruits[index];
        food.isVegan = true;
        index++;
    }
}

console.log(foodSchedule);