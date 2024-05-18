var numero = window.document.getElementById('numerotxt')
var analisador = window.document.getElementById('selectanalisador')
let resposta = window.document.getElementById('resposta')
let valores = []

function tanafaixa(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function ehnumero(n){
    if(n.length != 0){
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


    if(ehnumero(numero.value) && tanafaixa(numero.value) && !tanalista(numero.value, valores)){
       
        var item = window.document.createElement('option')
        item.text = `O número ${numero.value} foi adicionado.`
        analisador.appendChild(item) 
        valores.push(Number(numero.value))
        resposta.innerHTML = ''
        numero.value = ''
    }else if(ehnumero(numero.value) && tanafaixa(numero.value) && tanalista(numero.value, valores)){
        window.alert('Esse número já está na lista, escolha outro e tente novamente!')
        resposta.innerHTML = ''
        numero.value = ''
    }else if(ehnumero(numero.value) && !tanafaixa(numero.value) && !tanalista(numero.value, valores)){
        window.alert('Esse número está fora da faixa permitida, escolha outro e tente novamente!')
        resposta.innerHTML = ''
        numero.value = ''
    }else if(!ehnumero(numero.value)){
        window.alert('Escreva um número para adicionar à lista.')
        resposta.innerHTML = ''
        numero.value = ''
    }
    
}

function Finalizar(){

    if(valores.length != 0){
        resposta.innerText = `Foram adicionados ${valores.length} números à lista.`
        resposta.innerHTML += `<p>A soma dos valores na lista é ${soma(valores)}.</p>`
        resposta.innerHTML += `<p>A média dos valores na lista é ${media(valores)}.</p>`
        resposta.innerHTML += `<p>O maior número da lista é ${maiornumero(valores)}.</p>`
        resposta.innerHTML += `<p>O menor número da lista é ${menornumero(valores)}.</p>`
    }else{
        window.alert('Nenhum número foi adicionado à lista.')
    }
   
}

function maiornumero(v){
    
    var maior = 0
    for(var posição = 0; posição < v.length; posição++){
        if(maior < v[posição]){
            maior = v[posição]
        }
    }
    return maior
}

function menornumero(v){
    var menor = v[0]
    for(var posição = 0; posição < v.length; posição++){
        if(menor > v[posição]){
            menor = v[posição]
        }
    }
    return menor
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

function Resetar(){
    if(valores.length != 0){
        resposta.innerHTML = ''
        valores = []
        numero.value = ''

        while(analisador.firstChild){
        analisador.removeChild(analisador.firstChild)
        }
    }else{
        window.alert('O analisador já está reinicializado!')
    }
    
}