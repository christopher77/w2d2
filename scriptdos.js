function map(array, f) {
  let r = [];
  for (let i in array) {
    r.push(f(array[i]));
  }
  return r;
}

// function doubleNumber(currentValue) {
//   return currentValue * 2;
// }
// let numbers = [1, 5, 10, 15, 60];
// let result = map(numbers, doubleNumber);
// console.log(result);

function every(array, f) {
  let contador = 0;
  for (let i in array) {
    if (f(array[i])) {
      contador += 1;
    }
  }
  if (contador == array.length) {
    return true;
  } else {
    return false;
  }
}
// let numbers = [1, 5, 10, 15, 60];
// function isBelow(currentValue) {
//   return currentValue < 60;
// }
// let result = every(numbers,isBelow);
// console.log(result);

function some(array, f) {
  let contador = 0;
  for (let i in array) {
    if (f(array[i])) {
      contador += 1;
    }
  }
  if (contador > 0) {
    return true;
  } else {
    return false;
  }
}

// let numbers = [1, 5, 10, 15, 60];
// function isBelow(currentValue) {
//   return currentValue < 50;
// }
// let doubles = some(numbers, isBelow);
// console.log(doubles);

function find(array, f) {
  let ar1 = [];
  for (let i in array) {
    if (f(array[i])) {
      ar1.push(array[i]);
    }
  }
  return ar1[0];
}
// let numbers = [1, 5, 10, 15, 60];
// function isBelow(currentValue) {
//   return currentValue < 50;
// }
// let found = find(numbers, isBelow);
// console.log(found);

function concat(array1, ...array2) {
  for (let i in array2) {
    array1.push(array2[i]);
  }
  return array1;
}

// let numbers = [1, 5, 10, 15, 60];
// let othersnumbers = 1;
// let united = concat(numbers, othersnumbers, 100, "job");
// console.log(united);

function join(array, separador = ",") {
  let cadena = "";
  for (let i in array) {
    cadena += array[i] + separador;
  }
  return cadena.substring(0, cadena.length - 1);
}
// let numbers = [1, 5, 10, 15, 60];
// let result = join(numbers, ";");
// console.log(result);

function pop(array) {
  let lastElement = array[array.length - 1];
  array.length = array.length - 1;
  return lastElement;
}
// let numbers = [1, 5, 10, 15, 60];
// let deleted = pop(numbers);
// console.log(numbers);
// console.log(deleted);
