let counter = 1;

function plus() {
    counter++;
    document.getElementById("count").innerHTML = counter;
    document.getElementById("count").style.fontSize = counter + "em";

}
function minus() {
    counter--;
    document.getElementById("count").innerHTML = counter;
    document.getElementById("count").style.fontsize = counter + "px";

}

function cityChange() {
    const city = document.getElementById("city").value;
    if (city == "502") {
        document.getElementById("output1").innerHTML = "Awsome";
    } else {
        document.getElementById("output1").innerHTML = "EHHHH";
    }
}

/* function login() {
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    if (name == "banana" && password == "a123") {
        document.getElementById("output2").innerHTML = "correct";
    } else {
        document.getElementById("output2").innerHTML = "wrong";
    }
} */
function login() {
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    const output = document.getElementById("output2");


    if (name == "banana" && password == "a123") {
        output.innerHTML = "correct";
        output.style.color = "blue";
    } else {
        output.innerHTML = "wrong";
        output.style.color = "red";
    }
}

/* function number() {
    const num = +document.getElementById("num").value;
    const output = document.getElementById("output3");

    if (num <= "40") {
        output.innerHTML = "red";
        output.style.color = "red";
    } else if
        (num >= "41" && num <= "60") {
        output.innerHTML = "orange";
        output.style.color = "orange";
    } else if
        (num >= "61" && num <= "80") {
        output.innerHTML = "blue";
        output.style.color = "blue";


    } else if
        (num >= "81" && num <= "100") {
        output.innerHTML = "green";
        output.style.color = "green";
    } else {
        output.innerHTML = "חריג";
        output.style.color = "pink";
    }
} */

function number() {

    const elem = document.getElementById("num");
    if (elem.value > 100) {
        elem.value = 0;
    } else if (elem.value < 0) {
        elem.value = 100;
    }


    const num = +elem.value;

    if (num <= 40) {
        elem.style.backgroundColor = "red";
    } else if (num <= 60) {
        elem.style.backgroundColor = "orange";
    } else if (num <= 80) {
        elem.style.backgroundColor = "blue";
    } else if (num <= 100) {
        elem.style.backgroundColor = "green";
    } else {
        elem.style.backgroundColor = "yellow";
    }
}

function replace() {
    const str1 = document.getElementById("str1").value;
    const str2 = document.getElementById("str2").value;

    document.getElementById("str1").value = str2;
    document.getElementById("str2").value = str1;

}



function salarycalcultor() {
    const user = document.getElementById("user").value;
    const salary = document.getElementById("salary").value;

    let raise = salary * 1.1;

    if (raise > 6000) {
        raise = salary * 1.05;
    }

    // document.getElementById("output3").innerHTML = 'השכר החדש של ' + user + ' הוא ' + raise + ' ש"ח';
    document.getElementById("output4").innerHTML = `השכר החדש של ${user} הוא ${raise} ש"ח`;
}

function check() {
    const age = +document.getElementById("age").value;
    const height = +document.getElementById("height").value;

    if (age >= 14 && age <= 18 && height >= 182 || age >= 21 && age <= 26 && height >= 182)
    /* ((age >= 14 && age <= 18 || age >= 21 && age <= 26) && height >= 182)  */ {
        document.getElementById("output5").innerHTML = " התקבלת";
    } else {
        document.getElementById("output5").innerHTML = " you can not join";
    }
}