let hour=document.getElementById('hour');
let min=document.getElementById('min');
let sec=document.getElementById('sec');

function displaytime(){
    let date=new Date();
    let hh=date.getHours();
    let mi=date.getMinutes();
    let se=date.getSeconds();

    let hrotate=30*hh+mi/2;
    let minrotate=6*mi;
    let secrotate=6*se;

    hour.style.transform=`rotate(${hrotate}deg)`;
    min.style.transform= `rotate(${minrotate}deg)`;
    sec.style.transform=`rotate(${secrotate}deg)`;
}
setInterval(displaytime,1000);