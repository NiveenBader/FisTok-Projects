/* let count = 1;

function counter(num) {
    count += num;
    document.getElementById("count").innerHTML = count;
}
 */

let count = 1;

function counter(num) {
    count += num;
    document.getElementById("count").innerHTML = count;
}

function sum(num1, num2, num3) {
    /* return num1 + num2 + num3; */
    return `${num1} + ${num2} + ${num3} =${num1 + num2 + num3}`;
}

function calcVat(num) {
    return num * 1.17;
}

function welcome(firstName, lastName) {
    return `WELCOME ${firstName} ${lastName} `

}

function avg(num1, num2, num3, num4) {
    return (num1 + num2 + num3 + num4) / 4;
}