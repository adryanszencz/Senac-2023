
function botao(valor){

    let emailUsuario
    let senhaUsuario


    if(valor == '1'){

        let email = document.getElementById('email').value
        let senha = document.getElementById('senha').value
        if(email == emailUsuario && senha == senhaUsuario){
            alert('entrou')

        }
        
    }
    if(valor == '2'){
        let comfimarSenhaUsuario
        emailCadastro = document.getElementById('emailCadastro').value
        senhaCadastro = document.getElementById('senhaCadastro').value
        comfimarSenhaUsuario = document.getElementById('comfimarSenhaUsuario').value 
        if(senhaCadastro == comfimarSenhaUsuario && senhaCadastro.length >= '6'  && emailCadastro.length >= '6'){  
            alert('Realizado')
            emailUsuario = emailCadastro
            senhaUsuario = senhaCadastro
            window.history.go(-1)  
            alert(`${senhaUsuario}`) 
        }else{
            alert('algo de errado')
        }  
    }

}