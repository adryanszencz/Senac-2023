
let arrPacientes = []
let saiu = true
while(saiu){

    let pacientes = ''
    for(let i = 0; i < arrPacientes.length; i++) {
        pacientes += `${i + 1}° ${arrPacientes[i]}\n`
    }

    const informaçoes = Number(prompt(`Pacientes em espera:\n${pacientes} \n1-Novo Paciente\n2-Consultar Paciente\n3-Sair`))
    switch (informaçoes){
        case 1:
            const paciente = prompt('Digita o nome do paciente:')
            arrPacientes.push(paciente)
            alert(arrPacientes)
        break
        case 2:
            arrPacientes.shift()
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
