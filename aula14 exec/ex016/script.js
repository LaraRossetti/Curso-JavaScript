function Contar(){
   var inicio = window.document.getElementById('iníciotxt')
   var fim = window.document.getElementById('fimtxt')
   var passo = window.document.getElementById('passotxt')
   var frase = window.document.querySelector('div#frase')


   


    if(inicio.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
        frase.innerHTML = 'Não é possível contar.'
    }else{

        var inicio = Number(inicio.value)
        var fim = Number(fim.value)
        var passo = Number(passo.value)

        frase.innerHTML = 'Contando:'
        
        //Contagem crescente
        if(inicio < fim){ 
            for(var c = inicio; c <= fim; c = c + passo){
                frase.innerHTML += ` ${c} \u{1F449}` 
            }
            frase.innerHTML += `\u{1F6A9}`
        } 
        //Contagem descrescente
        else{
            for(var c = inicio; c >= fim; c = c - passo){
                frase.innerHTML += ` ${c} \u{1F449}`
            }
            frase.innerHTML += `\u{1F6D1}`
        }
        
    }

}