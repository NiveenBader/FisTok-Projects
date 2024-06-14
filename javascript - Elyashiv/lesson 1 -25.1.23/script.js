function welcomeMessage() {
    alert('ברוכים הבאיםלאתר שלי')
}

function showMessage() {
    console.log('ההודעה נשלחה בהצלחה')
}
function welcomeName() {
    var name = document.getElementById("userName").value;
    alert("welcome " + name)

}

function multi50() {
    var n = document.getElementById("num").value;

    alert(n * 50);
}

let sum = 410;
half = sum / 2;
console.log(half);




const add = (num1 = 0, num2 = 0) => {
    return { num1, num2, sum: num1 + num2 };
}

const { sum } = add(1, 4);
console.log(sum);