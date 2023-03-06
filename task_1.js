function splitTapeIntoWords(tape) {
  // Use a regular expression to split the tape into words
  let words = tape.split(/\s+/);
  
  // Remove any empty words (e.g., caused by multiple spaces in a row)
  words = words.filter(word => word !== '');
  
  return words;
}

let tape = "hello my   name   is  Volodya";
let words = splitTapeIntoWords(tape);
console.log(words);