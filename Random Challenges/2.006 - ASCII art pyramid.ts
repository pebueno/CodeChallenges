/*
We can render an ASCII art pyramid with N levels by printing N rows of asterisks, where the top row has a single asterisk in the center and each successive row has two additional asterisks on either side.

Here's what that looks like when N is equal to 3.

  *  
 *** 
*****
And here's what it looks like when N is equal to 5.

    *    
   ***   
  ***** 
 ******* 
********* 
Can you write a program that generates this pyramid with a N value of 10?

[execution time limit] 5 seconds (ts)

[memory limit] 1 GB

*/
function pyramid(N: number): string | undefined{
  let result = "";
  if (N > 1) {
    for (let i = 0; i < N; i++) {
      let row = "";
      for (let j = 0; j < N - i - 1; j++) {
        row += " ";
      }
      for (let k = 0; k < 2 * i + 1; k++) {
        row += "*";
      }
    }
    console.log(result);
    return result;
  }
}

const startTime = performance.now();

pyramid(10);

const endTime = performance.now();

// Calculate execution time in seconds
const executionTime = (endTime - startTime).toFixed(1);

console.log(`Execution time: ${executionTime}s`);
