function Verificar(){
    var anot = window.document.getElementById('txtano')
    var sex = window.document.querySelector('input[name=txtsex]:checked').value
    var frase = window.document.getElementById('frase')
    var year = new Date().getFullYear()
    
    var maiordeidade = (anodenascimento) => {
        return anodenascimento <= (year-18)
    }


  
    var ano = Number(anot.value)

    if(maiordeidade(ano) && sex == 'Feminino'){
        frase.innerText = `Você é uma mulher de ${ano} anos.`
    } else if(maiordeidade(ano) && sex == 'Masculino'){
        frase.innerText = 'Você é um homem maior de idade.'
    } else if(!maiordeidade(ano) && sex == 'Feminino'){
        frase.innerText = 'Você é uma mulher menor de idade.'
    } else if(!maiordeidade(ano) && sex == 'Masculino'){
        frase.innerText = 'Você é um homem menor de idade.'
    }

    
}