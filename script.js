let button = document.querySelector("#button")
let slider = document.querySelector("#slider")
let number = document.querySelector("#number")
let containerPassword = document.querySelector("#container-password")
let password = document.querySelector("#password")
let valor = document.querySelector("#valor")

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!"
let newPassword = ""

valor.innerHTML = slider.value

slider.oninput = function (){
    valor.innerHTML = this.value
}


function gerarValor(){
    let pass = ""

    for(let i = 0, n = charset.length; i < slider.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n))
    }

    containerPassword.classList.remove('hide')
    password.innerHTML = pass
    newPassword = pass
    
}

function copyPass(){
    alert('senha copiada!')
    navigator.clipboard.writeText(newPassword)
}