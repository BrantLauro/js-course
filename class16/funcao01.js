function parimpa(n){
    
    if(n % 2 == 0){

        return "par";

    }else{

        return "ímpar";

    }
}

let num =  11;

console.log(`o número ${num} é ${parimpa(num)}`);
