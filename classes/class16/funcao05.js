/*
function fatorial(n){
    fat = n;
    for(c = 1; c < n; c++){
        fat *= c;
    }
    return fat;
}

console.log(fatorial(5));
*/

// Recursividade

function fatorial(n){
    if(n == 1){
        return 1;
    }else{
        return n * fatorial(n-1);
    }
}

console.log(fatorial(5));