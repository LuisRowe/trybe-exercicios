

let fruits = [3, 4, 10, 1, 12];
let total = 0;

for (let index = 0; index < fruits.length; index += 1) {
  total = total + fruits[index];
  //ou poderia ser "total += fruits[index]";
}

if (total > 15){
  console.log(total)
} else {
  console.log("Valor menor que 16.")
}
