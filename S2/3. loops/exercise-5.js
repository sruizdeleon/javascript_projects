/* Usa un bucle **for...of** para recorrer todos los juguetes y añade los que tengan más de 15 ventas (sellCount) al array popularToys.
Imprimelo por consola.. Puedes usar este array:
*/

const popularToys = [];
const toys2 = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10},
	{id: 11, name: 'Action Woman', sellCount: 24},
	{id: 23, name: 'Barbie Man', sellCount: 15},
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
]

/* Iteramos el array toy y buscamos dentro del objeto la etiqueta sellCount para comprobar si es mayor de 15, si lo es, lo añadimos
con push al array popularToys */
for (let toy of toys2) {
	if (toy.sellCount > 15) { // también puede ser toy['sellCount'] (es indistinto) porque el parámetro en el objeto está definido sin comillas, si se define con comillas sería un string y habría que poner sí o sí toy['sellCount']
		popularToys.push(toy);
	}
}

console.log(popularToys);
