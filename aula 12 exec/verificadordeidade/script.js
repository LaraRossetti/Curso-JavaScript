function Verificar(){
    var anot = window.document.getElementById('txtano')
    var sex = window.document.getElementsByName('txtsex')
    var frase = window.document.getElementById('frase')
    var year = new Date().getFullYear()
    var gênero = ''
    var idade = year - Number(anot.value)

    var img = window.document.getElementById('imagem')
    


    if(idade < 0 || idade > 110){
        window.alert('Verifique seus dados e tente novamente.')
    }
    else{
        if(sex[0].checked){
            gênero = 'Masculino'
            if(idade >= 0 && idade <= 2){
                img.setAttribute('src','bb masculino.png')
            }else if(idade <= 10){
                img.setAttribute('src','criança masculino.png')
            }else if(idade <= 21){
                img.setAttribute('src','adolescente masculino.png')
            }else if(idade <= 60){
                img.setAttribute('src','adulto masculino.png')
            }else{
                img.setAttribute('src','idoso masculino.png')
            }
        }else if(sex[1].checked){
            gênero = 'Feminino'
            if(idade >= 0 && idade <= 2){
                img.setAttribute('src','bb feminino.png')
            }else if(idade <= 10){
                img.setAttribute('src','criança feminino.png')
            }else if(idade <= 21){
                img.setAttribute('src','adolescente feminino.png')
            }else if(idade <= 60){
                img.setAttribute('src','adulta feminina.png')
            }else{
                img.setAttribute('src','idosa feminina.png')
            }
        }   
   


        if(gênero == 'Feminino'){
            frase.innerText = `Detectamos uma Mulher com ${idade} anos.`
            frase.appendChild(img)
        }else{
            frase.innerText = `Detectamos um Homem com ${idade} anos.`
            frase.appendChild(img)
        }
   
   
   
    }

   
}