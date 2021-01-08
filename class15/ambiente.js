var num = [5, 8, 2, 9, 3];

for(var i in num){
    console.log(`A posição ${i} tem o valor ${num[i]}`);
}

console.log(`O Vetor tem ${num.length} elementos`);
console.log(`O primeiro valor do vetor é ${num[0]}`);
console.log(`O elemento ${num[0]} tem indice ${num.indexOf(5)}`);
console.log(`Adicionando 1 à posição ${num.push(1)} ficaria ${num}`);
console.log(`O vetor é ${num} que, em ordem crescente, fica ${num.sort()}`);



