for(var numPedaços = 8; numPedaços >= 0; numPedaços--){
    if(numPedaços == 8){
        console.log(`A pizza tem ${numPedaços} pedaços!`);
    }else if (numPedaços < 8 & numPedaços > 1){
        console.log(`Você comeu um pedaço! Agora só restam ${numPedaços} pedaços.`);
    }else if(numPedaços == 1){
        console.log('Você comeu um pedaço! Agora só resta 1 pedaço.');
    }else{
        console.log('Você comeu o pedaço! Não restam mais pedaços, a pizza acabou!');
    }
}
