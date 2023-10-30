/* Comprueba en cada uno de los usuarios que tenga almenos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia. Una vez lo tengas compruebalo con un console.log. */

const alumns = [
    { name: 'Pepe Viruela', T1: false, T2: false, T3: true },
    { name: 'Lucia Aranda', T1: true, T2: false, T3: true },
    { name: 'Juan Miranda', T1: false, T2: true, T3: true },
    { name: 'Alfredo Blanco', T1: false, T2: false, T3: false },
    { name: 'Raquel Benito', T1: true, T2: true, T3: true }
];

let studentPosition = 4; //posicion del estudiante en el array
let studentMarks = new Array(); //array para guardar datos del estudiante
let isApproved = false;
let index = 0; //indice para iterar el array y solo coger solo los datos de la variable studentPosition


/* Iteramos el array alumns y metemos en studentMarks solo los datos T1 T2 T3 del alumno que coincida su
studentPosition con el index */

for (let alumn of alumns) {
    if (index === studentPosition) {
        let j = 0;
        for (let value in alumn) {
            if (j > 0) {
                studentMarks.push(alumn[value]);
            }
            j++;
        }
    }
    index++;
}

/* Contamos cuantos trimestres tienen true y lo sumamos a countTrue */

let countTrue = 0;
for (let studentMark of studentMarks) {
    if (studentMark == true) {
        countTrue++;
    }
}

/* Comprobamos que el número de trimestres true sea mayor o igual a 2 y, en consecuencia, ajustamos
isAppoved en true o false */

if (countTrue >= 2) {
    isApproved = true;
} else if (countTrue < 2) {
    isApproved = false;
}


console.log(studentMarks);
console.log(countTrue);
console.log('isApproved:', isApproved);