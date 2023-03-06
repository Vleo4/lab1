function MaxDate(datesArray) {
    let maxDate = datesArray[0];
  
    for (let i = 1; i < datesArray.length; i++) {
      if (datesArray[i] > maxDate) {
        maxDate = datesArray[i];
      }
    }
    return maxDate;
}

let datesArray = [new Date("2023-01-01"), new Date("2023-01-15"), new Date("2022-02-28"), new Date("2023-03-10")];
console.log(MaxDate(datesArray));