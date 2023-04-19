const nomeAluno = prompt('Digite o nome do aluno:')
const notaUm = parseFloat( prompt('Digite a 1ª nota:'))
const notaDois = parseFloat( prompt('Digite a 2ª nota:'))
const notaTres = parseFloat( prompt('Digite a 3ª nota:'))
const notaQuatro = parseFloat( prompt('Digite a 4ª nota:'))

const mediaFinal = (notaUm + notaDois + notaTres + notaQuatro) / 4

    if( mediaFinal >= 7  && mediaFinal <= 10){
        alert(`${nomeAluno} vc está Aprovado sua media foi: ${mediaFinal}`)

    }else if(mediaFinal >= 5 && mediaFinal <= 6){
        alert(`${nomeAluno} vc está de Recuperação sua media foi: ${mediaFinal}`)

    } else if(mediaFinal >= 0 && mediaFinal <= 4) {
        alert(`${nomeAluno} vc está Reprovado sua media foi: ${mediaFinal}`)
    }