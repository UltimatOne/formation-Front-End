for (let i = 1; i < 16; i++) {
  if (i % 15 == 0) {
    document.getElementById("root").innerHTML += "<br>" + "FizzBuzz" + "<br>";
  } else if (i % 3 == 0) {
    document.getElementById("root").innerHTML += "<br>" + "Fizz" + "<br>";
  } else if (i % 5 == 0) {
    document.getElementById("root").innerHTML += "<br>" + "Buzz" + "<br>";
  } else {
    document.getElementById("root").innerHTML += "<br>" + i + "<br>";
  }
}

for (let i = 1; i < 16; i++) {
  if (i % 15 == 0) console.log("FizzBuzz");
  else if (i % 3 == 0) console.log("Fizz");
  else if (i % 5 == 0) console.log("Buzz");
  else console.log(i);
}