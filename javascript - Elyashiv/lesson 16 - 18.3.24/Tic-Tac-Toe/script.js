const divs = document.querySelectorAll("#board>div");
let isX = true;

for (const div of divs) {
    div.addEventListener("click", function (ev) {
        const elem = ev.target;
        if (elem.innerText) {
            return;
        }

        if (isX) {
            elem.innerText = "X";
        } else {
            elem.innerText = "O";
        }

        isX = !isX;
        showTurn()
    });
}

function showTurn() {
    document.querySelector('.currentTurn').classList.remove('currentTurn');

    if (isX) {
        document.querySelector('#players>div:first-child').classList.add('currentTurn');
    } else {
        document.querySelector('#players>div:last-child').classList.add('currentTurn');
    }
}