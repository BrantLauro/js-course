function pair_odd(n){
    
    if(n % 2 == 0){

        return "pair";

    }else{

        return "odd";

    }
}

let num =  11;

console.log(`Number ${num} is ${pair_odd(num)}`);
