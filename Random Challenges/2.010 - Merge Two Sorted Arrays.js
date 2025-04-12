/* TASK

Maya and Diego are avid collectors of action figures. Each collection is sorted by the number of figures 
of each type in increasing order. So, if a collection has 3 Superman, 1 Batman, and 5 Green Hornet action figures, 
that would be represented as [1, 3, 5].

After getting married, they want to combine their individual collections into a single sorted collection 
to showcase their joint love for action figures.

Write a function `mergeSortedArrays` that takes two sorted arrays of numbers representing their collections 
and returns a single merged sorted array.

Example 1:
Input:
  arrMaya = [3, 4, 8]
  arrDiego = [1, 2, 9]
Output:
  [1, 2, 3, 4, 8, 9]

Example 2:
Input:
  arrMaya = [1, 6]
  arrDiego = [1, 3, 6]
Output:
  [1, 1, 3, 6, 6]

Constraints:
- Both arrays are already sorted in non-decreasing order.
- The arrays may have different lengths.
*/

/**
 * @param {number[]} arrMaya - Sorted array of Maya's action figures
 * @param {number[]} arrDiego - Sorted array of Diego's action figures
 * @returns {number[]} - Combined sorted array
 */
function mergeSortedArrays(arrMaya, arrDiego) {
  const merged = [];
  let i = 0, j = 0;

  while (i < arrMaya.length && j < arrDiego.length) {
    if (arrMaya[i] < arrDiego[j]) {
      merged.push(arrMaya[i++]);
    } else {
      merged.push(arrDiego[j++]);
    }
  }

  while (i < arrMaya.length) merged.push(arrMaya[i++]);
  while (j < arrDiego.length) merged.push(arrDiego[j++]);

  return merged;
}

console.log(mergeSortedArrays([3, 4, 8], [1, 2, 9])); // Output: [1, 2, 3, 4, 8, 9]
console.log(mergeSortedArrays([1, 6], [1, 3, 6]));    // Output: [1, 1, 3, 6, 6]
