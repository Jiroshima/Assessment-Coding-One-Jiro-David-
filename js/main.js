/**
 * Final exam part 1: sequences
 */
import Sequence from './sequence.js' 
import './lib/p5.min.js';
// this is later used to organise our sketch on the HTML page by putting it in 
// the div with the CSS id 'sketch'
const sketchHolder = document.getElementById('sketch');

  
// --------- STEP 5 ----------------------------
// create an instance of the sequence class

let sequenceArray = ['*', '*', '@', '@', '+', '+', '+'] //creates an array sequenceArray with values '0 0 1 1 . . .'
let sequence = new Sequence(sequenceArray); //creates a new instance of a sequence object using sequenceArray as the argument


// --------- STEP 4 ----------------------------
//
// colours for each sequence element
const lookup = 
// maps characters to HSLA colour values 
{
    '0': `hsla(348, 100%, 50%, 1)`,
    '1': `hsla(34, 100%, 66%, 1)`,
    '.': `hsla(125, 100%, 41%, 1)`,
    ' ': `hsla(90, 100%, 10%,1)`,
    'A': `hsla(124, 100%, 41%, 1)`,
    '*': `hsla(294, 95%, 51%, 0.74)`,  // pink
    '@': `hsla(273, 100%, 50%, 1)`, // purple
    '+': `hsla(0, 100%, 50%, 1)`    // Red

}   


// --------- STEP 1 ----------------------------

// function drawSequenceFromArray(list) {
//         const sequenceArray = ['0', '0', '1', '1', '.', '.', '.']; // creates the array of characters '0 0 1 1 . . .'
//         const gridWidth = 7; // creates a constant called gridWidth and sets it to 7px
//         const gridHeight = 7; // creates a constant called gridHeight and sets it to 7px 
//         const cellWidth = 85.7; // creates a constant called cellWidth and sets it to 85.7 px as 600px/7 = 85.7
//         const cellHeight = 85.7; // creates a constant called cellHeight and sets it to 85.7 px as 600px/7 = 85.7
      
//         for (let row = 0; row < gridHeight; row++) {
//             for (let col = 0; col < gridWidth; col++) {
//             const index = (row % sequenceArray.length) * gridWidth + col; // nested for loop that iterates over the grid. The outer loops iterates over the rows in the grid and the inner for loop iterates over 
//             // the columns within each of the rows.
//             // the constant index is then calculated using the formula
      
//             const character = sequenceArray[index]; // gets the character from the array using the index
//             const colour = lookup[character]; // gets the corresponding colour from the lookup const using the character returned
      
//             const x = col * cellWidth; // calculates the x-cordinate of the cell
//             const y = row * cellHeight; // calculates the y-coordinate of the cell
      
//             fill(colour); // sets the colour of the text
//             textSize(cellHeight); // sets the size of the text
//             text(character, x, y + cellHeight); // draws the character at coordinates x, y + the cellHeight
//           }
//         }
//       }
// --------- STEP 6 ----------------------------

/**
 * 
 * @param {Sequence} sequence to draw 
 * @param {Integer} size horizontal size
 */
function drawSequence(sequence, size) {
  const gridWidth = size;
  const gridHeight = size;
  const cellWidth = 600 / size; // scales the cellWidth based on the specified size
  const cellHeight = 600 / size; // scales the cellHeight based on the specified size
  background(0, 0, 0) //creates a black background

  for (let row = 0; row < gridHeight; row++) {
      for (let col = 0; col < gridWidth; col++) { // uses for loop to iterate through the grid
          const character = sequence.next(); // use the next() method of the Sequence class
          sequence.shuffle(); //shuffles the sequence
          const colour = lookup[character]; //uses lookup to check for character colour 

          const x = col * cellWidth; // sets x-coordinate
          const y = row * cellHeight; // sets y-coordinate

          fill(colour); //fills the text with colour chosen
          textSize(cellHeight); //adjusts textsize according to cell height
          text(character, x, y + cellHeight); //places the character to a specific x,y coordinate in the grid
          
      }
  }
  sequence.index = 0 //sets sequence index to 0 after for loop so it doesnt repeat and overlap
  
}

window.setup = function () {
    createCanvas(600, 600).parent(sketchHolder);
    frameRate(10); // sets the framerate to 10fps so that the pattern refreshes slow 
}

window.draw = function() {
    drawSequence(sequence, 30); //draws the sequence according to the drawsequence function
}
  

    


