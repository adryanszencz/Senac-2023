const arr = ["Frodo","Sam","Merry","pippin","Gandalf","Aragorn","Legolas","Gimli"]

/*let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)*/

let tamanho = arr.unshift("Boromir")
console.log(arr)
console.log(tamanho)

tamanho = arr.shift("Boromir")
console.log(arr)
console.log(tamanho)

tamanho = arr.pop("Gimli")
console.log(arr)
console.log(tamanho)