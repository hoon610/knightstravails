import { knightsTravails } from "./searchalgorithm.js";

// Module to control and keep track of the moves/clicks from user
const uiController = () => {
    const cellNodes = document.querySelectorAll("td");
    cellNodes.forEach((cellNode) => {

        // Loop through all cells to find Knight img and assign coords
        // for initial start position
        if (cellNode.querySelector("img") !== null) {
            let knightLocation = JSON.parse("[" + cellNode.dataset.coordArray + "]");
            console.log("Current knight location ", knightLocation);
        }

        // Loop through all cells to attach click listeners to each cell
        // and assign coords once click is seen
        cellNode.addEventListener("click", function() {
            let clickedLocation = JSON.parse("[" + cellNode.dataset.coordArray + "]");
            console.log("Clicked on location ", clickedLocation);

            // Loop again to locate new current location of previous Knight 
            // img and assign coords
            // Remove old Knight img from previous coords
            // Call knightsTravails module to start search algo
            const cellNodes = document.querySelectorAll("td");
            cellNodes.forEach((cellNode) => {
                if (cellNode.querySelector("img") !== null) {
                    let knightLocation = JSON.parse("[" + cellNode.dataset.coordArray + "]");
                    console.log("Current knight location ", knightLocation);
                    const knightImg = document.querySelector("img");
                    knightImg.remove();
                    knightsTravails(knightLocation, clickedLocation); 
                }
            });
            
            // Create the new Knight img at clicked location
            const knightImg = document.createElement("img");
            knightImg.src = "./assets/knight.svg";
            cellNode.appendChild(knightImg);   
        });
    });
};

export { uiController };