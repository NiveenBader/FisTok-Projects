function login(ev) {
    ev.preventDefault();

    const { userName, password } = ev.target.elements;
    console.log(userName, password);
    const obj = {
        userName: userName.value,
        password: password.value,
    };

    /* const obj = {
        userName: document.getElementById('userName').value,
        password: document.getElementById('password').value,
    }; */

    fetch(`https://api.shipap.co.il/login`, {
        credentials: 'include',
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(obj),
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                return res.text().then(x => {
                    throw new Error(x);
                });
            }
        })
        .then(data => {
            alert(`ההתחברות של ${data.fullName} בוצעה בהצלחה!`);
            console.log(data);
            ev.target.style.display = 'none';

        })
        .catch(err => {
            console.log(err.message);
            //alert(err.message);
        });
}
