function binarySearch(array, point) {
    let left = 0;
    let right = array.length - 1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (array[mid] === point) {
        return mid;
      } else if (array[mid] < point) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return -1;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let point = 5;
console.log(binarySearch(array, point));