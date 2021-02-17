var num = [5, 8, 2, 9, 3];

for(var i in num){
    console.log(`Position ${i} has the value ${num[i]}`);
}

console.log(`The vector has ${num.length} elements`);
console.log(`The first value of the vector is ${num[0]}`);
console.log(`The element ${num[0]} has index${num.indexOf(5)}`);
console.log(`Adding 1 to position ${num.push(1)} would be ${num}`);
console.log(`The vector is ${num} which in ascending order becomes ${num.sort()}`);



