for(var numSlices = 8; numSlices >= 0; numSlices--){
    if(numSlices == 8){
        console.log(`The pizza has ${numSlices} slices!`);
    }else if (numSlices < 8 & numSlices > 1){
        console.log(`You ate a slice! Now only ${numSlices} slices left.`);
    }else if(numSlices == 1){
        console.log('You ate a slice! Now only 1 slice left.');
    }else{
        console.log('You ate a slice! No more slices left the pizza is over!');
    }
}
