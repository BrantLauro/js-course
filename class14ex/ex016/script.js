function botao(){

    var nInicial = document.getElementById('inicial');
    var nFinal = document.getElementById('final');
    var passo = document.getElementById('passo');

    if(nInicial.value.length == 0 || nFinal.value.length  == 0 ||  passo.value.length == 0){

         res.innerHTML = 'Impossível contar. Faltam dados!';

    }else{

        res.innerHTML = 'Contando: <br> '
        var i = Number(nInicial.value);
        var f = Number(nFinal.value);
        var p = Number(passo.value);

        if( p <= 0){

            p = 1;
            window.alert('Passo Invalido!Considerando passo 1');

        }

        if ( i < f) {

            for(var c = i; c <= f; c += p){

                res.innerHTML += `${c} \u{1F449}`; 

            } 

        }else{

            for(var c = i; c >= f; c -= p){

                res.innerHTML += `${c} \u{1F449}`; 

            } 
            
        }

        res.innerHTML +=`\u{1F3C1}`;

    }
}

   

