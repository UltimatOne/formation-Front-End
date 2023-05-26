let root = document.querySelector('#root')
let contenu = "";
root.append(contenu);

for (let i = 1; i < 16; i++) {
  if (i % 15 == 0) {
    contenu += "FizzBuzz\n";
  } else if (i % 5 == 0) {
    contenu += "Buzz\n";
  } else if (i % 3 == 0) {
    contenu += "Fizz\n";
  } else {
    contenu += i + "\n";
  }
}
root.append(contenu);

for (let i = 1; i < 16; i++) {
  if (i % 15 == 0) console.log("FizzBuzz");
  else if (i % 5 == 0) console.log("Buzz");
  else if (i % 3 == 0) console.log("Fizz");
  else console.log(i);
}




    