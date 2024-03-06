// פתרון עם לחיצה על כפתור


/* const tasks = document.querySelector('.tasks');


function add() {

    const input = document.querySelector('input');

    const li = document.createElement('li');

    li.innerHTML = input.value;
    tasks.appendChild(li);

    input.value = '';

} */

/* const tasks = document.querySelector('.tasks');


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

    const btn = document.createElement("button");
    btn.innerHTML = 'Remove';
    li.appendChild(btn);
    input.value = '';
}


function keyup(ev) {
    if (ev.key === 'Enter')
        add();
} */



const tasks = document.querySelector(".tasks");

// פונקציה להוספת אלמנטים
function add() {
    const input = document.querySelector('input');

    // אם אין תוכן בתיבת הקלט - הפונקציה נעצרת
    if (!input.value) {
        return;
    }

    // יצירת אלמנט חדש
    const li = document.createElement('li');

    // הוספת האלמנט לתור הרשימה
    tasks.appendChild(li);

    // השמת התוכן של המשימה לאלמנט החדש
    const div = document.createElement('div');
    div.innerHTML = input.value;

    // מאפשרים למשתמש לערוך את התוכן של האלמנט
    div.contentEditable = true;
    li.appendChild(div);

    // יצירת לחצן מחיקה
    const btn = document.createElement('button');
    btn.innerHTML = 'x';

    // יצירת אירוע - כל לחיצה על הלחצן תפעיל את הפונקציה של המחיקה
    btn.addEventListener('click', function () {
        const isAllowed = confirm(`האם אתה בטוח כי ברצונך למחוק את ${div.innerHTML}?`);

        if (isAllowed) {
            li.remove();
        }
    });
    li.appendChild(btn);

    // איפוס תיב הקלט
    input.value = '';
}

// פונקציה להוספת אלמנטים באמצעות לחיצה על Enter
function keyup(ev) {
    if (ev.key == 'Enter') {
        add();
    }
}