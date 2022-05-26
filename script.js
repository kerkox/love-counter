let delay = 100;
const infinito = 10000;
document.addEventListener("DOMContentLoaded", function (event) {
    showTeAmoV2();
});

const accelerate = (counter) => {
    if (counter % 20 == 0 && delay > 10) {
        delay -= 5;
        // console.log(`delay -5: ${delay}`)
    } else if (counter % 100 == 0 && delay > 1 && delay <= 10) {
        delay -= 1;
        // console.log(`delay -1: ${delay}`)
    }
}

const showTeAmoV2 = async () => {
    let miAmor = document.querySelector("#mi-amor");

    const teAmo = document.createElement("div");
    teAmo.className = 'te-amo-line';
    teAmo.innerHTML = `<span>Te amo</span> <span id="veces">1</span><span id="heart">❤️</span> <span> veces mi amor<span/>`;
    miAmor.appendChild(teAmo)
    let heartSize = 48;
    for (let veces = 1; veces <= infinito; veces++) {
        let contador = document.querySelector("#veces")
        let heart = document.querySelector("#heart") 
        contador.className = "veces"
        contador.innerHTML = ` ${veces} `;
        heart.style.fontSize = heartSize+"px"
        heartSize += 0.1;

        await waiting();
        accelerate(veces);
    }
}

const showTeAmo = async () => {
    let miAmor = document.querySelector("#mi-amor");

    for (let veces = 1; veces <= infinito; veces++) {

        const teAmo = document.createElement("div");
        teAmo.className = 'te-amo-line';
        teAmo.innerHTML = `Te amo ${veces} veces mi amor`;
        miAmor.appendChild(teAmo)
        await waiting();
    }
}

const waiting = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, delay)
});