function Contar(){
   var inicio = window.document.getElementById('iníciotxt')
   var fim = window.document.getElementById('fimtxt')
   var passo = window.document.getElementById('passotxt')
   var frase = window.document.querySelector('div#frase')


   var inicio = Number(inicio.value)
   var fim = Number(fim.value)
   var passo = Number(passo.value)




   for(var c = inicio; c <= fim; c = c + passo){
        frase.innerHTML += `-> ${c} ` 
        
   }
   
   //frase.innerHTML = 'fim'
   


}