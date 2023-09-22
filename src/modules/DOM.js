function generateBoard(){
    const boardContainer = document.querySelector('.board');
    for (let i = 0; i < board.length; i++) {
        let row = document.createElement('div');
        for (let y = 0; y < board[i].length; y++) {
          let cell = document.createElement('div');
          if (i % 2 === 0)
            y % 2 === 0 ? cell.classList.add('white') : cell.classList.add('black');
          else
            y % 2 === 0 ? cell.classList.add('black') : cell.classList.add('white');
    
          cell.dataset.originalColor = cell.classList;
          cell.classList.add('cell');
          cell.dataset.row = i;
          cell.dataset.column = y;
          cell.dataset.x = i;
          cell.dataset.y = y;
    
          row.appendChild(cell);
        }
        row.classList.add('row');
        boardContainer.appendChild(row);
      }

}
generateBoard();
