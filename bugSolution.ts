function combine(arr1: number[], arr2: number[]): number[] {
  return arr1.concat(arr2);
}

const result = combine([1, 2, 3], [4, 5, 6]);
console.log(result); // Output: [1, 2, 3, 4, 5, 6]
//The explicit typing ensures that the return type is always correctly inferred as a number[] 