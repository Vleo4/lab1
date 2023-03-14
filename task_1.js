function splitTapeIntoWords(tape) {
  // split the tape into words
  let words = tape.split(/\s+/);
  
  // remove empty words
  words = words.filter(word => word !== '');
  
  return words;
}

let tape = "hello my   name   is  Volodya";
let words = splitTapeIntoWords(tape);
console.log(words);