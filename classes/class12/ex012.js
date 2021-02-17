var date= new Date();
var hr = date.getHours();
if (hr >= 6 && hr < 12) {
    console.log(`It is ${hr} o'clock. Good Morning!`);
} else if (hr >= 12 && hr < 18) {
    console.log(`It is ${hr} o'clock. Good Afternoon!`);
}else if (hr >= 18 && hr < 24){
    console.log(`It is ${hr} o'clock. Good Evening!`);
}else{
    console.log(`It is ${hr} o'clock. Good Night!`);
}
