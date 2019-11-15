let timeNow = () =>{
	const now = moment.utc().valueOf();
	const realTime = moment().utc().format("dddd, MMMM Do YYYY, h:mm:ss.SSS a");

/* Unix time*/
document.getElementById('unix-time').innerHTML = now;
document.getElementById('real-time').innerHTML = realTime;
	
}
 setInterval(timeNow,10);
