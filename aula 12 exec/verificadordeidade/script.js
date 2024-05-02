function Verificar(){
    var anot = window.document.getElementById('txtano')
    var sex = window.document.getElementsByName('txtsex')
    var frase = window.document.getElementById('frase')
    var year = new Date().getFullYear()
    var gênero = ''
    var idade = year - Number(anot.value)
   // var faixaetaria = ''

    
    // var img = window.document.getElementById('imagem')
    
   // var maiordeidade = (anodenascimento) => {
  //      return anodenascimento <= (year-18)
   // }
    
  
    
    /*
    
        if(idade >= 0 && idade <= 2){
            faixaetaria = 'bebê'
        }else if(idade <= 12){
            faixaetaria = 'criança'
        }else if(idade <= 21){
            faixaetaria = 'adolescente'
        }else if(idade <= 60){
            faixaetaria = 'adulto'
        }else if(idade <= 110){
            faixaetaria = 'idoso'
        }
        
    /*
  




/*
    if(maiordeidade(ano) && gênero == 'Mulher'){
        frase.innerText = `Você é uma mulher de ${ano} anos.`
       // img.src = 'adolescente feminina.jpg'
    } else if(maiordeidade(ano) && sex == 'Masculino'){
        frase.innerText = 'Você é um homem maior de idade.'
    } else if(!maiordeidade(ano) && sex == 'Feminino'){
        frase.innerText = 'Você é uma mulher menor de idade.'
    } else if(!maiordeidade(ano) && sex == 'Masculino'){
        frase.innerText = 'Você é um homem menor de idade.'
    }*/

    
    if(sex[0].checked){
        gênero = 'Masculino'
    }else if(sex[1].checked){
        gênero = 'Feminino'
    }

    if(gênero == 'Feminino'){
        frase.innerText = `Detectamos uma Mulher com ${idade} anos.`
    }else{
        frase.innerText = `Detectamos um Homem com ${idade} anos.`
    }
    
    



}