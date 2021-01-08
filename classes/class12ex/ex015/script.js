function verificar() {

    var data = new Date();

    var ano = data.getFullYear();

    var fano = document.getElementById("txtano");

    var res = document.querySelector("div#res");

    if(fano.value.length == 0 || Number(fano.value) > ano) {

        window.alert('[ERROR] Verifique os dados e tente novamente!');

    }else{

        var fsex = document.getElementsByName("radsex");

        var idade = ano - Number(fano.value);

        var genero = "";

        var img = document.createElement('img');

        img.setAttribute('id', 'foto');

        if(fsex[0].checked) {

            genero = 'Homem';

            if(idade <= 11){
                img.setAttribute('src', 'criançahomem.png');
            }else if(idade < 18){
                img.setAttribute('src', 'jovemhomem.png');
            }else if (idade < 60){
                img.setAttribute('src', 'homem.png');
            }else{
                img.setAttribute('src', 'idosohomem.png');
            }

        }else{

            genero = 'Mulher';

            if(idade <= 11){
                img.setAttribute('src', 'criançamulher.png');
            }else if(idade < 18){
                img.setAttribute('src', 'jovemmulher.png');
            }else if(idade < 60){
                img.setAttribute('src', 'mulher.png');
            }else{
                img.setAttribute('src', 'idosamulher.png');
            }
        }

        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!`;
        res.appendChild(img);
    } 
}