const clock = document.getElementById('clock');
const cal = document.getElementById('date');

setInterval(function(){
    let date = new Date();
    cal.innerHTML = `Date: ${date.toLocaleDateString()}`
},1)

setInterval(function(){
    let time = new Date;
    clock.innerHTML = `Time : ${time.toLocaleTimeString()}`;
},1000)