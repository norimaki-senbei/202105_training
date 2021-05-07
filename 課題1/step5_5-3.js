'use strict';
var fruits = [
  {name: "バナナ", price: 200},
  {name: "リンゴ", price: 200},
  {name: "イチゴ", price: 500},
  {name: "オレンジ", price: 250},
  {name: "モモ", price: 350}
]

for (var i = 0; i<fruits.length; i++){
  if (fruits[i].price >= 300){
    console.log(fruits[i].name);
  }
}