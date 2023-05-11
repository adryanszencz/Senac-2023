let whileBool = true
let Finanças = []
let ValorTotal = 0

while(whileBool) {

    let promptMain = Number(prompt(`   Sistema Pessoal de Finanças 

    Valor total : ${ValorTotal}   
    
    1 - Cadastrar Credito  
    2 - Cadastrar Debito 
    3 - Extrato dos Débitos e Créditos 
    4 - Sair `))
        switch(promptMain) {
            
            case 1:
                let creditoObs = prompt("Motivo do deposito:")
                let valorCredito = Number(prompt("Qual seria o valor:"))
                let creditos = `${creditoObs} - C - R$${valorCredito}`
                ValorTotal += valorCredito
                Finanças.push(creditos)
            break
            case 2:
                let debitoObs = prompt("Motivo de retirada:")
                let valorDebito = Number(prompt("Qual seria o valor:"))
                let Debito = `${debitoObs} - D - R$${valorDebito}`
                ValorTotal -= valorDebito
                Finanças.push(Debito)
            break
            case 3:
                if(Finanças.length == 0) {
                    alert('Não possui nada')
                } else {
                    let grana = ''
                    for(let i = 0; i < Finanças.length; i++) {
                        grana += ` ${Finanças[i]}\n`
                    }
                    alert(` Extrato\n\n${grana}\nValor total : R$${ValorTotal}`)
                }
            break
            case 4:
            let confirmarSaida = confirm('Deseja mesmo sair?')
            if(confirmarSaida) {
                whileBool = false
            }
            break
            default:
                alert('Comando inválido')
            break
        }
}

