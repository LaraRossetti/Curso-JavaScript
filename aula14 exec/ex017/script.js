function Tabuada(){

    var numero = window.document.getElementById('numerotxt')
    var tabuada = window.document.getElementById('selecttabuada')


    if(numero.value.length == 0){
        window.alert('Por favor, digite um número!')
    }else{
        var numero = Number(numero.value)
    }
    
    tabuada.innerHTML = ''

    for(var c = 0; c <= 10; c++){
        var item = window.document.createElement('option')
        item.text = `${numero} x ${c} = ${numero*c}`
        tabuada.appendChild(item)
    }


}