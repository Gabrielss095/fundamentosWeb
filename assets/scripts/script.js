/*
por Tag: getElementByTagName() 
por Id: getElementById()
por nome: getElementsByNome()
por classe: getElementsByClassName()
por seletor: querySelector()
*/

let nome = document.querySelector('#nome');
let email = document.querySelector('#email');
let assunto = document.getElementById('assunto');
let mapa = document.querySelector('.mapa')
let nomeOk = false
let emailOk = false
let assuntoOk = false

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length > 0 && nome.value.length < 3) {
        txtNome.innerHTML = 'Nome inválido!';
        nome.style.backgroundColor = '#ff6961'
    }
    else {
        txtNome.innerHTML = ''
        nome.style.backgroundColor = ''
        nomeOk = true
    }
}

function validaEmail(){
    letEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'Email inválido'
        email.style.backgroundColor = '#ff6961'
    }
    else {
        txtEmail.innerHTML = ''
        email.style.backgroundColor = ''
        emailOk = true
    }
}

function validaAssunto(){
    txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length < 5 || assunto.value.length > 100) {
        txtAssunto.innerHTML = '<h2>Assunto inválido</h2>'
        assunto.style.backgroundColor = '#ff6961'
    }
    else {
        txtAssunto.innerHTML = ''
        assunto.style.backgroundColor = ''
        assuntoOk = true
    }
}

function enviar() {
    if(nomeOk = true && emailOk == true && assuntoOk == true) {
        alert ('Formulário enviado com sucesso')
    }
    else {
        alert('Preencha todos os campos corretamente')
    }
}

function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal(){
    mapa.style.width = '250px'
    mapa.style.height = '250px'
}