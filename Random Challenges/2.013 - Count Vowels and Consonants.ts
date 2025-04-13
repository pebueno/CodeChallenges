/**
  TASK
 
  Given a sentence, count how many vowels and consonants it contains.
 
  You should:
  - Ignore whitespace and punctuation
  - Consider only alphabetical characters
  - Count vowels (a, e, i, o, u — both upper and lowercase)
  - Everything else (alphabetic) is a consonant
 
  Example:
 
  Input: "Quick! Hide the zebra-print quilt."
  Output: { vowels: 10, consonants: 19 }
 */

const input = "Quick! Hide the zebra-print quilt.";

function main(sentence: string) {
  // Remove whitespace and punctuation
  // Convert the string to lowercase for easier comparison
  // Loop through each character
  // Count vowels and consonants separately
  // Log the result as a single object
  let filteredSentence: string = "";
  let vowels: number = 0;
  let consonants: number = 0;
  
  if (sentence != "") {
    filteredSentence = sentence.toLocaleLowerCase().replace(/[-,.! ]/g, "");

    filteredSentence.split('').forEach((char) => {
      if (char === '') return;

      let possibleVowels: string[] ='aeiou'.split('');

      if (possibleVowels.includes(char)) {
        vowels++;
      } else {
        consonants++;
      }
    });
  }

  return `vowels: ${vowels}, consonants: ${consonants} }`;
}

console.log(main(input));
