var data= new Date();
var hr = data.getHours();
if (hr >= 6 && hr < 12) {
    console.log(`São ${hr} horas. Bom Dia!`);
} else if (hr >= 12 && hr < 18) {
    console.log(`São ${hr} horas. Boa Tarde!`);
}else if (hr >= 18 && hr < 24){
    console.log(`São ${hr} horas. Boa Noite!`);
}else{
    console.log(`São ${hr} horas. Boa Madrugada!`);
}
