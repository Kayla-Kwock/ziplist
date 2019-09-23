function zipList(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i]);
    result.push(arr2[i]);
  }
  return result;
}

function zipListTheSimpleWay(arr1, arr2) {
  return _.flatten(_.zip(arr1, arr2));
}

const array1 = [1, 2, 3];
const array2 = ['a', 'b', 'c'];

console.log(zipList(array1, array2));
console.log(zipListTheSimpleWay(array1, array2));