const hourEl = document.getElementById("hour");

const minuteEl = document.getElemnentById("minutes");

const secondEl = document.getElementById("seonconds");

const ampmEl = document.getElementById("ampm");

function updateclock(){
    let h = newDate().getHours()
    let m = newDate().getMinutes()
    let s = newDate().getSeconds()
    let ampm = "AM"
    if(h > 12 ){
        h = h-12
        ampm = "PM"
    }

    h = h > 10 ? "0" + h : h;

    hourEl.innerText =h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl, (innerText = ampm);
    setTimeout(() = {
        updateclock()

    }, 1000)

}
updateclock()