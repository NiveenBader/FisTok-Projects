
// שלב ראשון תופסים את הלוח
const board = document.querySelector("#board");
const height = 30;
const width = 30;
// יצירת לוח באמצעות GRID

function createBoard() {
    const grid = document.createElement("div");
    grid.className = "grid";
    document.board.appendChild(grid);

    for (let y = 1; y <= 30; y++) {
        for (let x = 1; x <= 30; x++) {
            const div = document.createElement("div");
            div.className = "cell";
            grid.appendChild(div);
        }
    }




}













