'use strict';
var fruits = [
  {name: "バナナ", price: 200},
  {name: "リンゴ", price: 200},
  {name: "イチゴ", price: 500},
  {name: "オレンジ", price: 250},
  {name: "モモ", price: 350}
]

var sumPrice = 0;
for (var i = 0; i < fruits.length; i++){
  sumPrice = sumPrice + fruits[i].price;
}
console.log(sumPrice);