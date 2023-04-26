let valor= Number(prompt("Quantidade inicial"))

opçao(valor)

function opçao(val){
    const opçoes= Number(prompt(`   A tua quantidade é  ${val} 
    vocé gostaria de:

    1-adcionar
    2-remover
    3-sair`))

    switc(opçoes)
}

function switc(valo){
    switch(valo){
        case 1:
            const adcionar = Number(prompt("Qual seria a quantidade a ser adcionado :"))
            valor = valor + adcionar
            opçao(valor)
        break
        case 2:
            const remover = Number(prompt("Qual seria a quantidade a ser removido :"))
            valor = valor - remover
            opçao(valor)
        break
        default:
        break
    }
}
