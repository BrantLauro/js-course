let n = [];
let p = document.getElementById('p1');
let numTxt = document.getElementById('number');

function add(){
    let num = Number(numTxt.value);
    if(numTxt.value.length == 0){
        window.alert('Please. Type a Number!');
    }else if(num < 1 || num > 100){
        window.alert('Please. Type a number between 1 and 100!');
    }else{
        if(n.indexOf(num) != -1){
         window.alert('This number has already been added!');
        }else{
        n.push(num);
        let select = document.getElementById('select');
        let item = document.createElement('option');
        item.text =`Value ${num} added`;
        select.appendChild(item);
        p.innerHTML = '';
        }
    }

    numTxt.value = '';
    numTxt.focus();
    n.sort();

}

function finish(){
    if(n.length == 0){
        window.alert('Enter a number before finalizing');
    }else{
        let better = n[0];
        let lower = n[0];
        let s = 0;
        let average = 0;
        for(let pos in n){
            s += n[pos];
            if(n[pos] > better){
                better = n[pos]
            }
            if(n[pos] < lower){
                lower = n[pos]
            }
        }

        average = s / n.length;
        p.innerHTML = '';
        p.innerHTML = `In all, we have ${n.length} numbers registered. <br>
        The biggest value was ${better}. <br>
        The smallest value was ${lower}. <br>
        Adding all values we have ${s}. <br>
        The average of the number entered was ${average}`;

    }
}

