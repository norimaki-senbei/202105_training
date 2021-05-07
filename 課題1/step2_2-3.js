'use strict';
var nums = [1, 3, 5, 8, 4];
var sum = 0;
for (var i = 0; i < nums.length; i++){
  if (nums[i] <= 4){
    sum = sum + nums[i];
  }
}
console.log(sum);