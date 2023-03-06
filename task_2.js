function containsSubstring(string, substring) {
    return string.includes(substring);
}

let string = "Lviv Polytechnic National University is the largest scientific university in Lviv, Ukraine.";
let substring = "university";
console.log(containsSubstring(string, substring));