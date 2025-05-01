// create the wordle grid boxes
function createGrid(grid, rows, cols) {
    const grid = document.getElementById(grid);
    for (let i = 0; i < rows; i++) {
        const row = document.createElement("div");
        row.classList.add("box-row");

        for (let j = 0; j < cols; j++) {
            const box = document.createElement("div");
            box.classList.add("box");
            row.appendChild(box);
        }
        grid.appendChild(row);
    }
}

createGrid("grid", 6, 5);