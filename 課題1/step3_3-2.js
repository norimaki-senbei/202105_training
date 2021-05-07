'use strict';
var devLang = ['JavaScript', 'Ruby', 'PHP', 'Java', 'C'];
for (var i = 0; i < devLang.length; i++){
  if (i === 4){
    devLang[i] = 'C+'
  }
  if (i === 0 || i === 3){
    console.log(devLang[i]);
  }
}