function load() {

    var msg = window.document.getElementById("msg");
    var img = window.document.getElementById("image");
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();

    msg.innerHTML = `It is ${hours}:${minutes}.`;

    if (hours >=0 && hours <= 12) {

        img.src = "morning.png";
        document.body.style.backgroundColor = '#e2cd9f';

    } else if (hours <= 18) {

        img.src = "afternoon.png";
        document.body.style.backgroundColor = '#b9846f';

    } else {

        img.src = "night.png"
        document.body.style.backgroundColor = '#515154';

    }
}
