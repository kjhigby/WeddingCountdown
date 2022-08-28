const dayEl = document.getElementById("days")
const hourEl = document.getElementById("hours")
const minuteEl = document.getElementById("minutes")
const secondEl = document.getElementById("seconds")
const wedDate = new Date("Oct 15, 2022 00:00:00")

updateCount()

function updateCount(){
    const today = new Date().getTime();
    console.log(today)
    const gap = wedDate - today;
    console.log(gap)
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap/day);
    const h = Math.floor((gap%day)/hour);
    const m = Math.floor((gap%hour)/minute);
    const s = Math.floor((gap%minute)/second);

    dayEl.innerText = d;
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;

    setTimeout(updateCount, 1000);


}