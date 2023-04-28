
let pacientes = []
let saiu = true
while(saiu){
    const informaçoes = Number(prompt(`Pacientes em espera: 
    ${pacientes}
    1-Novo Paciente
    2-Consultar Paciente
    3-Sair`))
    switch (informaçoes){
        case 1:
            const paciente = prompt('Digita o nome do paciente:')
            pacientes.push(paciente)
            alert(pacientes)
        break
        case 2:
            pacientes.shift()
        break
        case 3:
            saiu = false
            alert("saiu")
        break
    }
}
