function processArray(numbers) {
    const processedArray = [];
    for (let i = 0; i < numbers.length; i++) {
      const number = numbers[i];
      if (number % 2 === 0) {
        processedArray.push(number * number);
      } else {
        processedArray.push(number * 3);
      }
    }
    return processedArray;
  }
function formatStringsBasedOnNumbers(stringsArray, processedNumbers) {

    const formattedStrings = [];
    for (let i = 0; i < stringsArray.length; i++) {
      const currentString = stringsArray[i];
      const correspondingNumber = processedNumbers[i];
      if (correspondingNumber % 2 === 0) {
        formattedStrings.push(currentString.toUpperCase());
      } else {
        formattedStrings.push(currentString.toLowerCase());
      }
    }
    return formattedStrings;
  }
  
  console.log("The function takes two arrays as arguments:\n" +
  "-An array of strings.\n"+
  " An array of numbers processed by processArray.\n"
  + ".................\n"
  + "The function modifies each string based on its corresponding number: \n"
  + "- Capitalize the entire string if the number is even.\n"
  + "- Convert the string to lowercase if the number is odd.\n");

const numbers = [1, 2, 3, 4, 5, 6, 7];
const processedArray = processArray(numbers);
const stringsArray = ["julia", "eminem", "darko", "demon", "jjcock","okoe","yuo"];
const formattedStrings = formatStringsBasedOnNumbers(stringsArray, processedArray);

  console.log("These are the numbers: " + numbers);
  console.log("These are the old names: " + stringsArray);
  console.log("And this are the outcomes:............. "+ formattedStrings);
module.export = processArray;
module.export = formatStringsBasedOnNumbers;
module.export= numbers;
module.export=stringsArray;
module.export=formattedStrings;