// פתרון עם לחיצה על כפתור


/* const tasks = document.querySelector('.tasks');


function add() {

    const input = document.querySelector('input');

    const li = document.createElement('li');

    li.innerHTML = input.value;
    tasks.appendChild(li);

    input.value = '';

} */

const tasks = document.querySelector('.tasks');


function add() {

    const input = document.querySelector('input');

    if (!input.value) {
        return;
    }
    const li = document.createElement('li');

    li.innerHTML = input.value;

    li.addEventListener('click', function (ev) {

        const isAllowed = confirm(`Are You Sure you wat to Delete ${ev.target.innerHTML}?`);

        if (isAllowed) {
            ev.target.remove();
        }
    });

    tasks.appendChild(li);

    input.value = '';
}


function keyup(ev) {
    if (ev.key === 'Enter')
        add();
}