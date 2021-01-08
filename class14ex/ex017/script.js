function operacao() {

    var num = document.getElementById('num');
    var tabuada = document.getElementById('tabuada')
   

    if(num.value.length == 0){

        window.alert('Por Favor, digite um número!');

    }else{
        var n = Number(num.value);
        tabuada.innerHTML = '';
        for(var c = 1; c <= 10; c++){
            var item = document.createElement('option');
            item.text = `${n} x ${c} = ${c*n}`
            tabuada.appendChild(item);
        }
    }
}
