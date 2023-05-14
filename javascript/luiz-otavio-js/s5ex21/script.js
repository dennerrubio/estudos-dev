const array1 = ["Nome1", "Nome2", "Nome3", "Nome4", "Nome5"];
const array2 = ["Nome1", "Nome2", "Nome3", "Nome4", "Nome5"];
const array3 = ["Nome1", "Nome2", "Nome3", "Nome4", "Nome5"];
const array4 = ["Nome1", "Nome2", "Nome3", "Nome4", "Nome5"];

array1.splice(-1, 1);
console.log(array1);

array2.splice(array2.length, 0,"Nome6","Nome7");
console.log(array2);

array3.splice(0, 1,"Novo Nome1");
console.log(array3);

array4.splice(3, 0,"Nome 3.5");
console.log(array4);
