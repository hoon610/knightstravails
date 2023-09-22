const gameBoard = () =>{

    //instantiate variables and create board as chessTable
    const defaultStartLocation = [0,0];
    const coordArray = [];
    const chessTable = document.createElement("table");

    //create cells and apply position values to each cell
    chessTable.setAttribute("class", "center");
    for (let i = 0; i < 8; i++){
        const tableRow = document.createElement("tr");
        let cellRowCoord = Math.abs(i-7);
        for (let j = 0; j < 8; j++) {
            const tableCell = document.createElement("td");
            let cellColumnCoord = j;

            // loop through to shade odd valued cells
            if ((i + j) % 2 == 0) {
                tableCell.setAttribute("class", "cell whitecell");
                tableRow.appendChild(tableCell);
                coordArray.push(cellRowCoord);
                coordArray.push(cellColumnCoord);
                tableCell.dataset.coordArray = coordArray;
                coordArray.splice(0, 2);
            } else {
                tableCell.setAttribute("class", "cell blackcell");
                tableRow.appendChild(tableCell);
                coordArray.push(cellRowCoord);
                coordArray.push(cellColumnCoord);
                tableCell.dataset.coordArray = coordArray;
                coordArray.splice(0, 2);
            }
        }
    chessTable.appendChild(tableRow);
    }
    //create knight
    const cellNodes = chessTable.querySelectorAll('td');
    cellNodes.forEach((cellNode) => {
        if (defaultStartLocation.toString() === cellNode.dataset.coordArray){
            let knightImg = document.createElement("img");
            knightImg.src = "./assets/knight.svg";
            cellNode.appendChild(knightImg);
        }
    });
    const domBoard = document.querySelector('.board');
    domBoard.appendChild(chessTable);
}
const resetBoard = (function () {
    const resetButton = document.querySelector(".reset");
    resetButton.addEventListener("click", function (){
        location.reload();
    });
})();

export {gameBoard};