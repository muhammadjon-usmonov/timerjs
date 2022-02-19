const elMinute = document.querySelector(".minut");
const elSecund = document.querySelector(".secund");
const elImg = document.querySelector(".img");

var minut = Number(prompt());
let sekund = 00;

function clockSet(minute, secund) {
    elMinute.textContent = minute.toString().padStart(2, "0")
    elSecund.textContent = secund.toString().padStart(2, "0")
}

let timer = clock()



function clock() {
    setInterval(() => {
        if (sekund == 00) {
            if (minut == 0 && sekund == 0) {

                clearInterval(timer)
            } else {
                sekund = 59;
                minut -= 1
            }



        } else {
            sekund -= 1
        }
        clockSet(minut, sekund)

        animation()
    }, 1000)
}

function animation() {
    let start = Date.now();

    let timer = setInterval(function () {
        let timePassed = Date.now() - start;

        elImg.style.left = timePassed / 5 + 'px';


        if (timePassed > minut) clearInterval(timer);

    }, 20);
}


