/**
 * Final exam part 1: sequences
 */
import './lib/p5.min.js'

// this is later used to organise our sketch on the HTML page by putting it in 
// the div with the CSS id 'sketch'
const sketchHolder = document.getElementById('sketch');

/**
 * A class to hold a repeating sequence of anything: numbers, characters, etc.
 */



class Sequence {
  /* Internal variables for this class */
  sequence; // Array: an array holding the sequence
  index; // Integer: current index in the sequence, from 0 to the length of the sequence - 1
  
  /**
   * Constructor: create a sequence from an array
   * @param {Array} list The list of elements for this sequence in an Array
   */
  constructor(list) {
      // deep copies the array
      this.sequence = [];
      for (let i = 0; i < list.length; i++) {
          this.sequence.push(list[i]);
      }

      // Set the internal index variable to an initial value
      this.index = 0; // sets starting position of index variable to 0
  }
  set index(i) {
    this.index = i;

  }
  /**
   * return the current element in the sequence and advance the sequence index
   */

  next() {
      const currentElement = this.sequence[this.index]; // get the current element in the sequence
      this.index = (this.index + 1) % this.sequence.length; // advance the sequence index and wrap around if necessary
      return currentElement; // return the current element
  }
}



// --------- STEP 5 ----------------------------
// create an instance of the sequence class

let sequenceArray = ['0', '0', '1', '1', '.', '.', '.']
let sequence = new Sequence(sequenceArray);




// --------- STEP 4 ----------------------------
//
// colours for each sequence element
const lookup = 
{
    '0': `hsla(348, 100%, 50%, 1)`,
    '1': `hsla(34, 100%, 66%, 1)`,
    '.': `hsla(125, 100%, 41%, 1)`,
    ' ': `hsla(90, 100%, 10%,1)`,
    'A': `hsla(124, 100%, 41%, 1)`

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
    // calculate the width of an element so that all of them fit across the screen
    // calculate the height of an element using the same scaling factor as the width
    // store the initial horizontal and vertical drawing positions (x and y)
    // maybe set a colour for the element? Or a particular font?
    // for each element in this array:
    //  draw this element as text (see p5js's text() function) in the current x,y position
    //  update the current horizontal drawing position

    // OPTIONAL: 
    // Repeat the above loop to draw multiple rows, filling the screen entirely.
    // Hint: For each loop, you will have to reset the hoziontal position and also modify the vertical one.

// --------- STEP 6 ----------------------------

/**
 * 
 * @param {Sequence} sequence to draw 
 * @param {Integer} size horizontal size
 */
function drawSequence(sequence, size) {
  const gridWidth = size;
  const gridHeight = size;
  const cellWidth = 600 / size; // Scale the cellWidth based on the specified size
  const cellHeight = 600 / size; // Scale the cellHeight based on the specified size

  for (let row = 0; row < gridHeight; row++) {
      for (let col = 0; col < gridWidth; col++) {
          const character = sequence.next(); // Use the next() method of the Sequence class
          const colour = lookup[character];

          const x = col * cellWidth;
          const y = row * cellHeight;

          fill(colour);
          textSize(cellHeight);
          text(character, x, y + cellHeight);
      }
  }
  sequence.index = 0
}


/**
 * SETUP --------------------------------------------------
 */
window.setup = function () {
    createCanvas(600, 600).parent(sketchHolder);
}



/**
 * DRAW --------------------------------------------------
 */
window.draw = function() {
    drawSequence(sequence, 20);
    
    
}

    


