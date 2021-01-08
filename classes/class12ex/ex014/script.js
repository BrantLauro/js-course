function carregar() {

    var msg = window.document.getElementById("msg");
    var img = window.document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();

    msg.innerHTML = `Agora são ${hora}:${minutos}.`;

    if (hora >=0 && hora <= 12) {

        img.src = "bomdia.png";
        document.body.style.backgroundColor = '#e2cd9f';

    } else if (hora <= 18) {

        img.src = "boatarde.png";
        document.body.style.backgroundColor = '#b9846f';

    } else {

        img.src = "boanoite.png"
        document.body.style.backgroundColor = '#515154';

    }
}
