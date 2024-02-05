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