'use strict';
function isEvenNumber(num){
  return !(num%2);
}
var nums = [4, 5, 6, 9];
for (var i = 0; i<nums.length; i++){
  if (isEvenNumber(nums[i])){
    console.log(nums[i]);
  }
}
