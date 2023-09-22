import {displayMoves} from "./display-moves.js"
// graph breadth-first-search algorithm

const squareRegistry = new Map();

// get/set current coords to the board
const chessSquare = (x, y) => {
    const xPosition = x;
    const yPosition = y;
    let predecessor;

    //define array for hardcoded possible moves of Knight
    const KNIGHT_MOVES = [
        [1, 2], [1, -2],
        [2, 1], [2, -1],
        [-1, 2], [-1, -2],
        [-2, 1], [-2, -1]
    ]

    const getPredecessor = () => predecessor;
    const setPredecessor = (newPredecessor) => {
        predecessor = predecessor || newPredecessor;
    }

    const name = () => `${x}, ${y}`;

    //evaluate current possible knight moves against offsets
    const possibleKnightMoves = () => {
        return KNIGHT_MOVES
            .map((offset) => newSquareFrom(offset[0], offset[1]))
            .filter((square) => square !== undefined);
    }

    // calculute new set of square coords against the offsets
    const newSquareFrom = (xOffset, yOffset) => {
        const [newX, newY] = [xPosition + xOffset, yPosition + yOffset];
        if (0 <= newX && newX < 8 && 0 <= newY && y < 8) {
          return chessSquare(newX, newY);
        }
    }

    // get/set map constructor object name(s)
    if (squareRegistry.has(name())) {
        return squareRegistry.get(name());
    } else {
        const newSquare = { name, getPredecessor, setPredecessor, possibleKnightMoves }
        squareRegistry.set(name(), newSquare);
        return newSquare;
    }
}

// intake the click coords from user and run the search algo
const knightsTravails = (start, finish) => {
    squareRegistry.clear();
  
    const origin = chessSquare(...start);
    const target = chessSquare(...finish);
  
    const queue = [origin];
    while (!queue.includes(target)) {
      const currentSquare = queue.shift();
  
      const enqueueList = currentSquare.possibleKnightMoves();
      enqueueList.forEach((square) => square.setPredecessor(currentSquare));
      queue.push(...enqueueList);
    }
    const path = [target]
    while (!path.includes(origin)) {
      const prevSquare = path[0].getPredecessor();
      path.unshift(prevSquare);
    }
     //console.log(`The shortest path was ${path.length - 1} moves!`);
     //console.log("The moves were:");
    let squareCoord = [];
    path.forEach((square) => {
         console.log(square.name());
        squareCoord.push(square.name());
    });
     //console.log(squareCoord);
     displayMoves(path, squareCoord);
    
};


export {knightsTravails};