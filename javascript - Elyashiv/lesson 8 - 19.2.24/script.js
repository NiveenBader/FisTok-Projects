const div = document.querySelector('#numbers');

const output = document.querySelector('#output');

div.innerHTML = numbers.join(', ');

function max() {
    let num = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > num) {
            num = numbers[i];
        }
    }
    output.innerHTML = `<b>המספר הגדול הוא:</b> ${num}`;
}


function min() {
    let num = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < num) {
            num = numbers[i];
        }
    }

    output.innerHTML = `<b>המספר הקטן הוא : </b>${num}`;
}

function sum() {

    let res = 0;

    for (let i = 0; i < numbers.length; i++) {
        res += numbers[i];
    }

    output.innerHTML = `<b>הסכום הוא:</b> ${res}`;

}

function count() {

    output.innerHTML = `<b>הכמות היא :</b> ${numbers.length}`;

}

function avg() {
    let res = 0;
    for (let i = 0; i < numbers.length; i++) {
        res += numbers[i];
    }
    const average = Math.round(res / numbers.length);
    output.innerHTML = `<b>הממוצע הוא :</b> ${average}`;
}

function sortAsc() {

    numbers.sort((a, b) => a - b);

    div.innerHTML = numbers.join(', ');
}
function sortDsc() {

    numbers.sort((a, b) => b - a);

    div.innerHTML = numbers.join(', ');
}



function leftStart() {
    numbers.shift();
    div.innerHTML = numbers.join(', ');
}
function leftEnd() {
    numbers.pop();
    div.innerHTML = numbers.join(', ');
}

function lines() {

    div.innerHTML = numbers.join('<br>');
}
function inline() {

    div.innerHTML = numbers.join(', ');
}