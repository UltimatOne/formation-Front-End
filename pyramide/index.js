let n1 = 8;
let string1 = "";

for (let i = 0; i <= n1; i++) {
  for (let j = 0; j < i; j++) {
    string1 += "*";
  }
  string1 += "<br/>";
}

let n2 = 7;
let string2 = "";

for (let i1 = 0; i1 < n2; i1++) {
    for (let k = 0; k < n2 - i1; k++) {
      string2 += "*";
    }
    string2 += "<br/>";
  }

  document.getElementById('pyramide').innerHTML = string1 + string2;



