function checkIsValid() {
    startLoader();
    setMessage("טוען...", "Blue");

    new Promise((resolve, reject) => {
        isValid = Math.floor(Math.random() * 2);

        if (isValid) {
            setTimeout(() => { resolve("Success") }, 1000 * 2);
        } else {
            setTimeout(() => { reject("Error"); }, 1000 * 3);
        }
    })
        .then(x => {
            setMessage("הפעולה בוצעה בהצלחה", "Green");
        })
        .catch(x => {
            setMessage("שגיאה בביצוע הפעולה", "Red");
        })
        .finally(() => {
            console.log("הסתיימה הפעולה");
            stopLoader();
        });
}

function startLoader() {
    document.querySelector(".loader").style.display = "block";
}

function stopLoader() {
    document.querySelector(".loader").style.display = "none";

}

function setMessage(message, color = "Black") {
    const elem = document.querySelector("#message");
    elem.innerText = message;
    elem.style.color = color;
}