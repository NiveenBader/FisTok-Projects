const clock = document.getElementById("analog-clock");

for (let i = 0; i < 60; i++) {
    const div = document.createElement("div");
    div.innerHTML = '';
    div.innerHTML += `<h2>${i}</h2>`;
    div.style.rotate = `${i * 6}deg`;
    clock.appendChild(div);
}