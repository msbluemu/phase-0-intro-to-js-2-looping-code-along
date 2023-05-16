// Code your solutions in this file


// function writeCards(names, message ){
//   for (i=0; i < names.length; i++){
//     console.log(`Thank you, ${names[i]}, for the wonderful ${message} gift!`)
//   }
//   return names;
// }

// writeCards(["Iirs" , "Eric", "Angie", "Kelly"], "birthday");

function writeCards(names, message){
   let i = 0;
   while(i < names.length){
    console.log(`Thank you, ${names[i]}, for the wonderful ${message} gift!`);
    i++;
   }
   return names;
}

writeCards(["Iirs" , "Eric", "Angie", "Kelly"], "birthday")

function countDown (number) {
   let i = number;
      while(i >=0){
      console.log(i);
      i--;
   }
  return number;
}

countDown(15);