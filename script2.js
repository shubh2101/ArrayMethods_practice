//1 Write a JavaScript function to check whether an `input` is an array or not.
// sol1
const is_array = (arr) => {
  return Array.isArray(arr);
};
//sol2
function isArray(input) {
  return input instanceof Array;
}

//2Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
//"Red,Green,White,Black"
//"Red,Green,White,Black"
//"Red+Green+White+Black"

const myColor = ['Red', 'Green', 'White', 'Black'];
const test1 = myColor.toString();
// console.log(myColor.join());
// console.log(myColor.join('+'));

//3 Write a JavaScript program that accepts a number as input
// and inserts dashes (-) between each even number.
// For example if you accept 025468 the output should be 0-254-6-8.

function evenDash(num) {
  const strArr = num.toString().split('');
  console.log(strArr);

  const result = [];

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === '0' || (strArr[i] % 2 === 0 && strArr[i + 1] % 2 === 0)) {
      result.push(strArr[i], '-');
    } else {
      result.push(strArr[i]);
    }
  }
  console.log(result.join(''));
  return result.join('');
}
evenDash(2254689077);
