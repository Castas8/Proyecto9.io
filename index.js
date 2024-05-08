for (let x=0; x < 5; x++){
    if(X==2)
        continue;
    console.log("x");
}

let a = 10;
a = a + 5;
a -= 5;

let x = 10;
x *= 5;
console.log(x);

//Tipo fecha
const fecha = new Date();
console.log(fecha);

function myFunction(p1, p2){
    return p1 * p2;
}

console.log(myFunction(5, 10));
console.log(myFunction());
console.log(myFunction(8));
console.log(myFunction);

function otraFuncion(a, b){
    return a * b;
}

//funcion flecha 
let otraFuncion2 = (a, b) => {
    return a*b 
}
console.log(otraFuncion2(4, 80))

//Funcion autoejecutables 
//Funcion anonima 
(() => console.log('Es función anónima autoejecutable'))();

let alumno = {	
    nombre : "Diego",
    apellido : "Castañeda",
    Matricula : 79265,
    nombreCompleto : () =>  this.nombre + ' ' + this.apellido //Regresa el nombre y apellido del alumno
}


console.log(alumno.nombreCompleto());