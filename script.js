const days= document.getElementById("days");
const hours= document.getElementById("hours");
const minutes= document.getElementById("minutes");
const seconds= document.getElementById("seconds");
const milliseconds= document.getElementById("milliseconds");
const countdown= document.getElementById("countdown");
const year= document.getElementById("year");
const loading= document.getElementById("loading")

const currentYear= new Date().getFullYear();

const newYearTime= new Date(`January 01 ${currentYear +1} 00:00:00`);
year.innerText= currentYear+1
 
function updateCountDown(){
	const currentTime= new Date();
	const difference= newYearTime-currentTime;
	console.log(difference);
	
	
	const d= Math.floor(difference / 1000/ 60/ 60/ 24);
	const h= Math.floor(difference/1000/60/60) % 24;
	const m= Math.floor(difference/1000/60) %60;
	const s= Math.floor(difference/1000)%60;
	
	
	
	
	days.innerHTML= d;
	hours.innerHTML= h<10? `0${h}`: h;
	minutes.innerHTML= m<10? `0${h}`: m;
	seconds.innerHTML= s<10? `0${h}`: s;
	
	

}

setTimeout(()=>{
	loading.remove();
	countdown.style.display= "flex"
},1700)

setInterval(updateCountDown,1000);