function verify() {
    var date = new Date();
    var year = date.getFullYear();
    var fyear = document.getElementById("txtyear");
    var ans = document.querySelector("div#ans");

    if(fyear.value.length == 0 || Number(fyear.value) > year) {
        window.alert('[ERROR] Check the data and try again!');
    }else{
        var fgen = document.getElementsByName("radgen");
        var age = year - Number(fyear.value);
        var genre = "";
        var img = document.createElement('img');
        img.setAttribute('id', 'photo');

        if(fgen[0].checked) {
            genre = 'Man';
            if(age <= 11){
                img.setAttribute('src', 'kid-man.png');
            }else if(age < 18){
                img.setAttribute('src', 'young-man.png');
            }else if (age < 60){
                img.setAttribute('src', 'man.png');
            }else{
                img.setAttribute('src', 'old-man.png');
            }

        }else{
            genre = 'Woman';
            if(age <= 11){
                img.setAttribute('src', 'kid-woman.png');
            }else if(age < 18){
                img.setAttribute('src', 'young-woman.png');
            }else if(age < 60){
                img.setAttribute('src', 'woman.png');
            }else{
                img.setAttribute('src', 'old-woman.png');
            }
        }

        ans.style.textAlign = 'center';
        ans.innerHTML = `You are ${genre} with ${age} year old!`;
        ans.appendChild(img);
    } 
}