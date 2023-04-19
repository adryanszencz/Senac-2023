
function botao(valor){

    let emailUsuario
    let senhaUsuario


    if(valor == '1'){
        alert(`${emailUsuario}`)
        email = document.getElementById('email').value
        senha = document.getElementById('senha').value
        if(email == emailUsuario && senha == senhaUsuario){
            alert('entrou')

        }
        
    }
    if(valor == '2'){
        let comfimarSenhaUsuario
        emailCadastro = document.getElementById('emailCadastro').value
        senhaCadastro = document.getElementById('senhaCadastro').value
        comfimarSenhaUsuario = document.getElementById('comfimarSenhaUsuario').value 
        if(senhaCadastro == comfimarSenhaUsuario){  
            alert('Realizado')
            window.history.go(-1)  
            alert(`${senhaUsuario}`) 
        }else{
            alert('algo de errado')
        }  

        emailUsuario = emailCadastro
        senhaUsuario = senhaUsuario
        
    }

}