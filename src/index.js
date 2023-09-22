import './style.css';
import { gameBoard } from './modules/board.js';
import { knightsTravails } from './modules/searchalgorithm.js';
import { uiController } from './modules/ui.move.js';

const appController = ( function (){
    gameBoard();
    uiController();
})();
