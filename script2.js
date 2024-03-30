//1 Write a JavaScript function to check whether an `input` is an array or not.
// sol1
const is_array = (arr) => {
  return Array.isArray(arr);
};
//sol2
function isArray(input) {
  return input instanceof Array;
}

//Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
//"Red,Green,White,Black"
//"Red,Green,White,Black"
//"Red+Green+White+Black"

const myColor = ['Red', 'Green', 'White', 'Black'];
const test1 = myColor.toString();
console.log(myColor.join());
console.log(myColor.join('+'));
