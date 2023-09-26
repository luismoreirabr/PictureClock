function carregar() {

    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var full = window.document.getElementById('body');
    var data = new Date()
    // var hora = data.getHours()

    var hora =1
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
    if (hora >= 6 && hora < 12) {
        img.src = 'manha.jpg'
        document.body.style.backgroundColor = "green"; 
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.jpg'
        document.body.style.backgroundColor = "darkgoldenrod"; 

    } else if (hora >= 18 && hora < 24){
        img.src = 'noite.jpg'
        document.body.style.backgroundColor = "darkblue";
    }else {
        img.src = 'madrugada.jpg'
        document.body.style.backgroundColor = "black";
    }
}