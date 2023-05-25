let n = 10;
let string = "";
for (let i = 1; i <= n; i++) {
  // imprime les espaces
  for (let j = 1; j <= n - i; j++) {
    string += "&nbsp" + "&nbsp";
  }
  // imprime les étoiles
  for (let k = 0; k < 2 * i - 1; k++) {
    string += "*";
  }
  string += "<br/>";
}
document.getElementById("pyramide").innerHTML = string;

let n1 = 10;
let string1 = "";

for (let i = 0; i <= n1; i++) {
  for (let j = 0; j < i; j++) {
    string1 += "*";
  }
  string1 += "<br/>";
}

let n2 = 9;
let string2 = "";

for (let i1 = 0; i1 < n2; i1++) {
  for (let k = 0; k < n2 - i1; k++) {
    string2 += "*";
  }
  string2 += "<br/>";
}

document.getElementById("triangle").innerHTML = string1 + string2;
