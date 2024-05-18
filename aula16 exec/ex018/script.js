

var numero = window.document.getElementById('numerotxt')
var analisador = window.document.getElementById('selectanalisador')
let resposta = window.document.getElementById('resposta')
var valores = []


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
        valores.push(numero.value)
    }else{
        window.alert('nao')
    }
    
}

function Finalizar(){

}