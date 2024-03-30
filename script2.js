//1 Write a JavaScript function to check whether an `input` is an array or not.
// sol1
const is_array = (arr) => {
  return Array.isArray(arr);
};
//sol2
function isArray(input) {
  return input instanceof Array;
}
