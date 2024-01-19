/**
 * A class to hold a repeating sequence of anything: numbers, characters, etc.
 */
export default class Sequence {
    /* Internal variables for this class */
    sequence; // Array: an array holding the sequence
    index; // Integer: current index in the sequence, from 0 to the length of the sequence - 1
    
    /**
     * Constructor: create a sequence from an array
     * @param {Array} list The list of elements for this sequence in an Array
     */
    constructor(array) { //constructor that takes an array 
        this.sequenceArray = array.slice(); // creates a copy of the array instead of modifying it directly
        this.index = 0; //sets internal variable class index to 0 
      }
    
      next() {
        const currentElement = this.sequenceArray[this.index]; // get the current element from the array based on the current index
        this.index = (this.index + 1) % this.sequenceArray.length; // increment the index and ensure it wraps around using the function modulo 
        return currentElement; // return the current element 
      }
    
      shuffle() {
        //function to swap positions of random indexes in the array 
        for (let i = this.sequenceArray.length - 1; i > 0; i--) { // generate a random index j between 0 and length 
          const j = Math.floor(Math.random() * (i + 1)); // swap the elements in position j and i in the array
          [this.sequenceArray[i], this.sequenceArray[j]] = [this.sequenceArray[j], this.sequenceArray[i]];
        }
      }
    }