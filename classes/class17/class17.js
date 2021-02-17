let friend = {name: 'José', 
gender: 'M', 
height: 85.4, 
fatten(h = 0){
    console.log('Fed Up');
    this.height+=h;
}};

friend.fatten(2);
console.log(`${friend.name} heights ${friend.height}Kg`);