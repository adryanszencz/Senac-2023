
let arrProprietario = []
let saiu = true
while(saiu){
    const informaçoes = Number(prompt(`Cadastro de imovel:\n\n1-Novo imovel \n2-Consultar imoveis\n3-Sair`))
    switch (informaçoes){
        case 1:
            const Proprietario = prompt('Digita o nome do Proprietario:')
            const quantidadeDeQuartos = Number(prompt('Digita a quantidade de Quartos:'))
            const quantidadeDeBanheiros = Number(prompt('Digita a quantidade de Banheiros:'))
            const possuiGarragem  = prompt('Possui garragem :')
            arrProprietario.push({ proprietario: Proprietario ,Quartos:quantidadeDeQuartos, Banheiros:quantidadeDeBanheiros , Garragem:possuiGarragem})
        break
        case 2:
            if(arrProprietario.length == 0) {
                alert('Não possui nenhum imovel cadastrado')
            } else {
                let Cadastrados = ''
                for(let i = 0; i < arrProprietario.length; i++) {
                    Cadastrados += `${i + 1}° Imovel\nNome do proprietário: ${(arrProprietario[i].proprietario)}\nQuantidade de quartos: ${arrProprietario[i].Quartos}\nQuantidade de banheiros: ${arrProprietario[i].Banheiros}\nGaragem: ${arrProprietario[i].Garragem}\n---------------------------------------------------\n`
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
