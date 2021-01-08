let n = [];
let p = document.getElementById('p1');
let numTxt = document.getElementById('numero');

function adicionar(){
    
    let num = Number(numTxt.value);
 
    if(numTxt.value.length == 0){

        window.alert('Por favor, digite um número');
    

    }else if(num < 1 || num > 100){

        window.alert('Por favor, digite um número entre 1 e 100');
        

    }else{
        
        if(n.indexOf(num) != -1){

         window.alert('Este número já foi adicionado');
          
        }else{

        n.push(num);
        let select = document.getElementById('select');
        let item = document.createElement('option');
        item.text =`Valor ${num} adicionado`;
        select.appendChild(item);
        p.innerHTML = '';
            
        } 

    }

    numTxt.value = '';
    numTxt.focus();
    n.sort();

}

function finalizar(){
    if(n.length == 0){

        window.alert('Digite um número antes de finalizar!');
        
    }else{
        
        let maior = n[0];
        let menor = n[0];
        let s = 0;
        let media = 0;

        for(let pos in n){
            s += n[pos];
            if(n[pos] > maior){
                maior = n[pos]
            }
            if(n[pos] < menor){
                menor = n[pos]
            }
        }
        media = s / n.length;
        p.innerHTML = '';

        p.innerHTML = `Ao todo, temos ${n.length} números cadastrados. <br>
        O maior valor informado foi ${maior}. <br>
        O menor valor informado foi ${menor}. <br>
        Somando todos os valores, temos ${s}. <br>
        A média dos valores digitados é ${media}`;

    }
}

