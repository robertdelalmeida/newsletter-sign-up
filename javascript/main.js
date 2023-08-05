

let formulario = document.querySelector('#formEmail')

formulario.onsubmit = function(evento) {
    evento.preventDefault()

    let temErro = false

    let inputEmail = document.forms['formEmail']['email']

    if(!inputEmail.value){
        temErro = true
        inputEmail.classList.add('inputError') 
        inputEmail.classList.remove('inputBorder')

        let span = inputEmail.previousSibling.previousSibling
        span.innerText = 'valid email required'
    } else {
        inputEmail.classList.add('inputBorder') 
        inputEmail.classList.remove('inputError')

        let span = inputEmail.previousSibling.previousSibling
        span.innerText = ''
    }

    if(!temErro){
        formulario.submit()
    }
}