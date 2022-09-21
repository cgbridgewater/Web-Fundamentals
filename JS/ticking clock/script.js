// Find time of day
function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
}



// Hour hand start
function hr_rotation(h) {
    h %= 43200; // seconds in 12 hours
    return ((360 * h / 43200) + 180) % 360;
}
// Hour hand end




// Minute hand start
function min_rotation(time) {
time %= 3600; // seconds in an hour
return ((6 * time / 60) + 180) % 360;
}
// Minute hand end




// Second hand start
function sec_rotation(s) {
s %= 60; // seconds in a minute
return ((6 * s) + 180) % 360;
}
// Second hand end




// Push arm angles into clock
var hour = document.getElementById("hour");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");

setInterval( () => {
let time = getSecondsSinceStartOfDay();
hour.style.transform = `rotate(${hr_rotation(time)}deg)`;
minutes.style.transform = `rotate(${min_rotation(time)}deg)`;
seconds.style.transform = `rotate(${sec_rotation(time)}deg)`;
}, 1000);