var daysE1=document.getElementById('days');
var hoursE1=document.getElementById('hours');
var minutesE1=document.getElementById('minutes');
var secondsE1=document.getElementById('seconds');

function countdown(){
let event=new Date('01/01/2023')
let now= new Date()
let totalSeconds=Math.floor(((event-now)/1000))
let days=Math.floor((totalSeconds/3600/24))
let hours=Math.floor(((totalSeconds/3600)%24))
let minutes=Math.floor(((totalSeconds/60)%60))
let seconds=Math.floor((totalSeconds%60))

daysE1.innerHTML=days;
hoursE1.innerHTML=hours;
minutesE1.innerHTML=minutes;
secondsE1.innerHTML=seconds;

}
countdown()
setInterval(countdown,1000)

