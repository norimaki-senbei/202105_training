'use strict';
function isEvenNumber(num){
  return !(num % 2);
  //return num % 2 === 0;//親切にかくならこっち
}
console.log(isEvenNumber(2));
