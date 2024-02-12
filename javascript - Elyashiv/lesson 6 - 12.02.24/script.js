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
