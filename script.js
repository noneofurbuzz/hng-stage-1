let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const day = new Date();
document.getElementById("currentDayOfTheWeek").textContent = days[day.getDay()]
document.getElementById("currentUTCTime").textContent = day.getTime()
function dayoftheweek(){
    const day = new Date();
    document.getElementById("currentDayOfTheWeek").textContent = days[day.getDay()]
    document.getElementById("currentUTCTime").textContent = day.getTime()
}
setInterval(dayoftheweek,1)