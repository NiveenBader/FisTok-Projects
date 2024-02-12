function task1() {
    const userName = prompt("שלום מדבר נציג המלונית, מש שמכם בבקשה")

    if (!userName) {
        task1();
        return;
    }

    const days = prompt(`יש ךי שאלה ${userName}, כמה ימים תרצו להתארח אצלנו ?`, 1);

    if (!days) {
        return;
    }

    let price = days * 100;
    alert(`עלות יומית במלונית הינה 100 שקל ליום ת ולכן התשלום רק ${price}`)

    const isBreakFast = confirm("עלות ארוחת בוקר הינה 30 שקלים , האם תרצה שנפנק אותך ")
    if (isBreakFast) {
        price += 30 * days;
    }
    alert(`סך הכול לתשלום : ${price}`);
}

/* function hotel3() {
    const userName = prompt("שלום, מדבר איתך אנדרואיד, מה השם בבקשה ? ");

    if (!userName) {
        return;
    }

    const guest = prompt(`יש לי שאלה ${userName} כמה אורחים תהיו ?`, 1)

    const price = confirm(" האופציות שיש לי להציע לך הן : חדר M - יוצא למשפחה עד 2 נפשות ,שעולה 200₪ לאדם.חדר L - יוצא למשפחה עד 5 נפשות , שעולה 100 ₪ לאדם.חדר XL - יוצא למשפחה עד 15 נפשת , שעולה 50 ₪ לאדם.")

    const m = 200;
    const l = 100;
    const xl = 50;

    const room = prompt("באיזה חדר תהיה מעוניין?");
    if (room == m) {
        const roomPrice = 200;
    } else if (room = l) {
        const roomPrice = 100;
    } else {
        roomPrice = 50;
    }

    const days = promp("כמה לילות ?");


    const Price = days * guest * roomPrice;
    /const total = price * room; 

    if (room = m) {
        alert(` זה יעלה : ${price * 200}`);
    }

} */

