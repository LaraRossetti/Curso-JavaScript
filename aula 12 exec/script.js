function Verificar(){
    var anot = window.document.getElementById('txtano')
    var sex = window.document.getElementById('sexo')
    var frase = window.document.getElementById('frase')

    var ano = Number(anot.value)

    if(ano <= '2006'){
        frase.innerText = 'Você é maior de idade.'
        
    } else{
        frase.innerText = 'Você é menor de idade.'
    }
}