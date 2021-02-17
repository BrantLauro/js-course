function factorial(n){
    let fac = 1;
    for(c = n; c > 1; c--){
        fac *= c;
    }
    return fac;
}

console.log(factorial(5));
