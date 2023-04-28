/*let x = 1
while(x<=3){
    alert("Valor de X:"+x)
    x++
}*/
let sair
while(sair == 100){
    const valor= Number (prompt("digita o valor:"))
    for (let i = 1; i <= 10; i++) {
        alert(i+"X" + valor + "=" +  i*valor)
        sair = valor
    }
}
alert("saiu")