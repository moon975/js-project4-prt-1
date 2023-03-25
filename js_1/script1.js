const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    // settimeout yazmassak otomatik calışmaz

    // öğle veya akşam olduğunu bildirdik. pm öğleden sonra demek

    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    }

    // burada dakika 10 dan önce 2 veya 3 gibi onun yerine 02 veya 03 gelicek.

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;


    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl.innerText = ampm;
    
    setTimeout(() => {
        updateClock();
    }, 1000);
}


// başlangıcta calışmasını istiyorsak bunu yazmalkıyız. kutu örneği gibi.

updateClock();