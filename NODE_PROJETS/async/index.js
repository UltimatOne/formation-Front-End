const axios = require("axios")
/**
 * récupération et transformation en json de facon async avec des promesses(.then) en méthode fetch
 * le tout stocké dans tableau
 */
const tableau = fetch("https://jsonplaceholder.typicode.com/posts",{
    method: "POST",
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(data)
})
.then(data => data.json())
.then(data => {console.log(data)})
.then(data => data)

//alternative avec axios
axios.post("https://jsonplaceholder.typicode.com/posts", data)
.then(resu => {console.log(resu);})