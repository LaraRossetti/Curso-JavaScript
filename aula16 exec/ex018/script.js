var numero = window.document.getElementById('numerotxt')
var analisador = window.document.getElementById('selectanalisador')
let resposta = window.document.getElementById('resposta')
let valores = []


function ehnumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function tanalista(n,v){
    for(var posição = 0; posição < v.length; posição++){
        if(n == v[posição]){
            return true
        }
    }
    return false
}


function Adicionar(){


    if(ehnumero(numero.value) && !tanalista(numero.value, valores)){
       
        var item = window.document.createElement('option')
        item.text = `O número ${numero.value} foi adicionado.`
        analisador.appendChild(item) 
        valores.push(Number(numero.value))
    }else{
        window.alert('Não foi possível adicionar na lista, tente novamente!')
    }
    
}

function Finalizar(){

    resposta.innerText = `Foram adicionados ${valores.length} números à lista.`
    resposta.innerHTML += `<p>A soma dos valores na lista é ${soma(valores)}.</p>`
    resposta.innerHTML += `<p>A média dos valores na lista é ${media(valores)}</p>.` 
}

function maiornumero(){

}

function menornumero(){

}

function media(v){
    var media
    media = soma(v) / v.length
    return media
}

function soma(v){

    var soma = 0
    for(var posição = 0; posição < v.length; posição++){
        var temporaria
        temporaria = v[posição]
        soma = soma + temporaria 
    }
    return soma 
}