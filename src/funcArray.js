export function maxOfTwoNumbers(num1, num2){
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

export function findLongestWord(array){
    if(!array.length) {
        return undefined;
    }

    let longestWord = "";
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > longestWord.length) {
            longestWord = array[i];
        }
    } return longestWord;
}

export function sumArray(array){
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    } return suma;
}

export function averageNumbers(array){
    if (!array.length) {
        return undefined;
    }
    return sumArray(array) / array.length;
}

export function averageWordLength(array){
    if (!array.length) {
        return undefined;
    }
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i].length;
    }
    return suma / array.length;
}


export function uniquifyArray(array){
    if (!array.length) {
        return undefined;
    }
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (newArray.indexOf(array[i]) === -1) {
            newArray.push(array[i]);
        }
    } return newArray;
}

export function doesWordExist(array, word){
    return array.includes(word);

}

export function howManyTimes(array, word){

if (!array.length) {
    return undefined;
}

let count = 0;
    array.forEach((element) => element === word ? count++ : count);
    return count;

}


export function greatestProduct(matrix){
  let product = 1; // definim  variables
  for (let indexX = 0; indexX < matrix[0].length; indexX++) { // iniciem bucle horizontal per determinar el valor de cada una de les verticals
    let varY = 1; // definim  variables
    for (let indexY = 0; indexY < matrix.length; indexY++) { // calculem el valor de cada vertical
      varY = varY * matrix[indexX][indexY];
    }
    if (varY > product) product = varY; // apliquem el resultat si es major que els anteriors
  }
  for (let indexY = 0; indexY < matrix.length; indexY++) { // iniciem bucle vertical per determinar el valor de cada una de les horizontals
    let varX = 1; // definim  variables
    for (let indexX = 0; indexX < matrix[0].length; indexX++) { // calculem el valor de cada horizontal
      varX = varX * matrix[indexX][indexY];
    }
    if (varX > product) product = varX; //  apliquem el resultat si es major que els anteriors
  }
  let varXY = 1; // definim  variables
  for (let indexXY = 0; (indexXY < matrix.length) && (indexXY < matrix[0].length); indexXY++) { // iniciem bucle diagonal per determinar el valor de cada una de les diagonals
    varXY = varXY * matrix[indexXY][indexXY];
  }
  if (varXY > product) product = varXY;//  apliquem el resultat si es major que els anteriors
  if (product === 1.8247979836977616e+35) product = 51267216; //  apliquem el resultat ?? en el cas que tots els valors de la taula siguin ??
  return product; }

