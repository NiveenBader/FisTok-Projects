function task1() {
    let i = 2;
    let res = '';

    while (i <= 100) {
        res += i + ',';
        i += 2;
    }
    document.getElementById("output1").innerHTML = res;
}