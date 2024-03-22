
function carregar(){
        var img = window.document.getElementById('imagem')
        var msg = window.document.getElementById('mensagem')
        var d = window.document.getElementById('dia')
        var t = window.document.getElementById('tarde')
        var n = window.document.getElementById('noite')
        var agora = new Date()
        var hora = agora.getHours()
        msg.innerHTML = `<p>Agora são ${hora} horas.</p>`
        
        if (hora >= 0 && hora <= 12 ){
                img.src = 'morning.png'
                document.body.style.backgroundColor = 'rgba(238, 201, 35, 0.678)'
                d.innerHTML += '<p>Bom Dia!</p>'
                msg.style.backgroundColor = 'rgba(238, 201, 35, 0.678)'
                msg.style.color = 'darkred'
        } else if(hora >= 13 && hora <= 18){
                img.src =  'afternoon.png'
                document.body.style.backgroundColor = 'rgba(241, 149, 9, 0.884)'
                t.innerHTML += '<p>Boa Tarde!</p>'
                msg.style.backgroundColor = 'rgba(241, 149, 9, 0.884)'
                msg.style.color = 'white'
        } else{
                img.src = 'night.png'
                document.body.style.backgroundColor = 'rgba(26, 4, 87, 0.87)'
                n.innerHTML += '<p>Boa Noite!</p>'
                msg.style.backgroundColor = 'rgba(26, 4, 87, 0.87)'
                msg.style.color = 'white'
        }
}     






