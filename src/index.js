import './style.css';
import { gameBoard } from './modules/board.js';
import { knightsTravails } from './modules/searchalgorithm.js';

const appController = ( function (){
    gameBoard();
    knightsTravails([3,3], [4,3]);
})();
