/* Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para hacer
un .fetch() y recibir los datos que devuelve. Imprimelo mediante un console.log(); */

const request = () => {fetch('https://api.agify.io?name=john').then(response => response.json()).then(data => console.log(data)).catch(error => console.error(error))};

request();


/* Usando AJAX */
/* request2.send();
const request2 = new XMLHttpRequest();
request2.open('GET', 'https://api.agify.io?name=john');
request2.addEventListener('load', function () {
    const data2 = JSON.parse(this.responseText);
    console.log(JSON.stringify(data2));
})

request2.send(); */