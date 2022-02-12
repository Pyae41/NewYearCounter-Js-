const daysCl = document.getElementById("days");
const hoursCl = document.getElementById("hours");
const minutesCl = document.getElementById("minutes");
const secondsCl = document.getElementById("seconds");



const newYear = "1 Jan 2023";

function countDown() {
    const newYearsDate = new Date(newYear);
    const currentDate = new Date();

    const secondsCount = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(secondsCount / 3600 / 24);

    const hours = Math.floor(secondsCount / 3600) % 24;

    const minutes = Math.floor(secondsCount / 60) % 60;

    const seconds = Math.floor(secondsCount) % 60;

    daysCl.innerHTML = formatTime(days)
    hoursCl.innerHTML = formatTime(hours)
    minutesCl.innerHTML = formatTime(minutes)
    secondsCl.innerHTML = formatTime(seconds)

}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

//initialize function
countDown()

setInterval(countDown, 1000)