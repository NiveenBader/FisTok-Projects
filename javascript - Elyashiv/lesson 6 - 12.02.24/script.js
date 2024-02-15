function task1() {
    let i = 2;
    let res = '';

    while (i <= 100) {
        res += i + ',';
        i += 2;
    }
    document.getElementById("output1").innerHTML = res;
}


function task2(elem) {
    const num = +elem.value;
    let isPrime = true;

    let i = 2;

    while (i < num) {

        if (num % i === 0) {
            // הפונקציה בודקת רת השארית , אם יש שארית אז הערך זה שלילי תעצור את הפונקציה אם זה שווה אפס אז התוצאה חיובית תמישך
            isPrime = false;
            break;
        }

        i++;
    }
    const output = document.getElementById("output2");

    if (isPrime) {
        output.style.color = "green";
        output.innerHTML = 'ראשוני';
    } else {
        output.style.color = "blue"
        output.innerHTML = 'פריק';

    }
}
function task3() {
    const num = +document.getElementById("num1").value;
    let result = '';

    let i = 1;
    while (i <= num) {
        result += i + ' ,';
        i++;

    }
    document.getElementById("output3").innerHTML = result;
}

/* function task() {
    const n1 = +document.getElementById("num2").value;
    const n2 = +document.getElementById("num3").value;

    let result = '';
    let start 
    let end 

    let
}
 */

function task5() {
    const num = +document.getElementById("num4").value;
    let result = '';

    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            result += i + ',';
        }
    }
    document.getElementById("output5").innerHTML = result;
}



function task6() {
    const num = +document.getElementById("num5").value;
    let result = '';

    for (let i = 0; i < num; i++) {
        result += '*';

    }
    document.getElementById("output6").innerHTML = result;
}

function task7() {
    const num = +document.getElementById("num6").value;
    let result = '';

    for (let i = 0; i < num; i++) {
        result += '*<br>';
    }
    document.getElementById("output7").innerHTML = result;

}

function task8() {
    const num = +document.getElementById("num7").value;
    let result = '';
    let calc = 1;

    for (let i = 1; i <= num; i++) {
        calc *= i;
        result += i;
        if (i !== num) {
            result += '*';
        }
    }

    document.getElementById("output8").innerHTML = `${result} = <b> ${calc} </b>`;

}