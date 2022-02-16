let email = document.querySelector('#exampleFormControlInput1')

let assunto= window.document.getElementById('exampleFormControlTextarea1')

function validaEmail(){


    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@')== -1){

        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'

       
        


    }
}