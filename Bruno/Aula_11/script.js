
let imoveis = []
let opçao = ''

while(opçao!=3){
    opçao = prompt(`Bem vindo ao cadastro de imoveis 
    Total Cadastrado ${imoveis.length}

    1-Cadastra Imovel
    2-Lista Imoveis 
    3-Sair`)
    switch(opçao){
    case '1':
        let imovel ={}
        imovel.Proprietario = prompt('Digite o nome do Proprietario:')
        imovel.Quartos = prompt('Digite a qtde de Quartos:')
        imovel.Banheiros = prompt('Digite a qtde de Banheiros:')
        imovel.garagem = prompt('Tem garagem S/N:')

        const confirma = confirm(`Salvar Imovel:
        Proprietario: ${imovel.Proprietario}
        Quartos: ${imovel.Quartos}
        Banheiros: ${imovel.Banheiros}
        garagem: ${imovel.garagem}`)

        if(confirma){
            imoveis.push(imovel)
        }

    break
    case '2':
        for(let i=0; i < imoveis.length; i++){
            alert(`
            Proprietario: ${imoveis[i].Proprietario}
            Quartos: ${imoveis[i].Quartos}
            Banheiros: ${imoveis[i].Banheiros}
            garagem: ${imoveis[i].garagem}
             `)
        }

    break   
    case '3':
        alert('Saindo do Sistema...')
    break
    default:
        alert ('Opçoes invalidas do Menu')
    break
}

}