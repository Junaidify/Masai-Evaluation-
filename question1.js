const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes", "Strawberry", "Watermelon", "Peach", "Kiwi"];

function rearrangeFruits(fruits){
  let remove = fruits.splice(3,4);
  fruits.splice(0, 0, remove);
  return fruits;
     
}

 let results = rearrangeFruits(fruits);
 console.log(results);

//  function removeFruits(fruits){
//   return fruits.splice(1,1);
//  }

//  console.log(removeFruits(fruits));