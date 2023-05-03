
let arrProprietario = []
let arrProprietarios = {}
let saiu = true
while(saiu){
    const informaçoes = Number(prompt(`
    Cadastro de imovel:
    
    1-Novo imovel 
    2-Consultar imoveis
    3-Sair`))
    
    switch (informaçoes){
        case 1:
          arrProprietarios.proprietario = prompt('Digita o nome do Proprietario:')
          arrProprietarios.Quartos = Number(prompt('Digita a quantidade de Quartos:'))
          arrProprietarios.Banheiros = Number(prompt('Digita a quantidade de Banheiros:'))
          arrProprietarios.Garragem  = prompt('Possui garragem :')
          arrProprietario.push(arrProprietarios)
        break
        case 2:
            if(arrProprietario.length == 0) {
                alert('Não possui nenhum imovel cadastrado')
            } else {
                let Cadastrados = ''
                for(let i = 0; i < arrProprietario.length; i++) {
                    Cadastrados += `
                    ${i + 1}° Imovel
                    Nome do proprietário: ${(arrProprietario[i].proprietario)}
                    Quantidade de quartos: ${arrProprietario[i].Quartos}
                    Quantidade de banheiros: ${arrProprietario[i].Banheiros}
                    Garagem: ${arrProprietario[i].Garragem}
                    ---------------------------------------------------
                    `
                }
                alert(Cadastrados)
            }
        break
        case 3:
            const quersair = Number(prompt(`gostaria sair :\n 1-Sim \n 2-Nao`))
            if(quersair == 1){
                alert("saiu")
                saiu = false
            }
        break
    }
}
