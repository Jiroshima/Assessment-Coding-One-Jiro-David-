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
    constructor(array) {
        this.sequenceArray = array.slice(); // Create a copy of the original array to avoid modifying it directly
        this.index = 0;
      }
    
      next() {
        const current = this.sequenceArray[this.index];
        this.index = (this.index + 1) % this.sequenceArray.length;
        return current;
      }
    
      shuffle() {
        // Shuffle the array using the Fisher-Yates algorithm
        for (let i = this.sequenceArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [this.sequenceArray[i], this.sequenceArray[j]] = [this.sequenceArray[j], this.sequenceArray[i]];
        }
      }
    }