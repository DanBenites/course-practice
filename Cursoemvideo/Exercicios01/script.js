function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutos} horas.`
    if(hora > 0 && hora <12){
        img.src ='img/manha.jpg'
        document.body.style.background = '#d1bb82'
    }else if(hora>=12 && hora<18){
        img.src ='img/tarde.jpg'
        document.body.style.background = '#915121'
    }else{
        img.src ='img/noite.jpg'
        document.body.style.background = '#043d46'
    }

}