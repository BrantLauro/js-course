function button(){
    var start = document.getElementById('start');
    var end = document.getElementById('end');
    var step = document.getElementById('step');
    if(start.value.length == 0 || end.value.length  == 0 ||  step.value.length == 0){
         ans.innerHTML = 'Impossible to count, data is missing!';
    }else{
        ans.innerHTML = 'Counting: <br> '
        var st = Number(start.value);
        var e = Number(end.value);
        var s = Number(step.value);
        if( s <= 0){
            s = 1;
            window.alert('Invalid step! Considering step 1');
        }
        if ( st < e) {
            for(var c = st; c <= e; c += s){
                ans.innerHTML += `${c} \u{1F449}`; 
            } 
        }else{
            for(var c = st; c >= e; c -= s){
                ans.innerHTML += `${c} \u{1F449}`; 
            } 
        }
        ans.innerHTML +=`\u{1F3C1}`;
    }
}

   

