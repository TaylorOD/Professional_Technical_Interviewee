/*

In this exercise, you're going to decompress a compressed string. Your input is a compressed string of the format number[string] and the decompressed output form should be the string written number times. For example:

Input: "3[abc]4[ab]c"
Output: abcabcabcababababc

Input: 2[ab]
Output: abab

Input: c
Output: c

Input: 2[3[a]b] 
Output: aaabaaab

Input: []
Output: false

Constraints: 
10 is max integer
<200 characters in array



Rules
Number can have more than one digit. For example, 10[a] is allowed, and just means aaaaaaaaaa

Repetitions can occur inside another. For example, 2[3[a]b] decompresses into aaabaaab

Characters allowed as input include digits, small English letters and brackets [ ]. [0-9][a-z]

Digits are only to represent amount of repetitions.

Letters are just letters.

Brackets are only part of syntax of writing repeated substring.

Input is always valid, so no need to check its validity.

Learning objectives:
This question gives you the chance to practice with strings, recursion, algorithm, compilers, and loops. 
It’s also an opportunity to work on coding with better efficiency.

Input: 2[ab]
         ^ 
Output: abab

possible solutions:
iterative solution:

create function that takes in inputString
  create currentInt var
  create currentString var = ''
  create result string var
  
  iterate through inputString 
    conditional found integer
    set currentInt to found intger
      check next character to see if opening bracket 
        iterate until find closing braket
          check if character is a-z if add to currentString
  let resultString = currentString + currentString (currentInt times)
  return resultString        




resurive solution - not sure how to implment 
Number(inputString[index]) => 3
*/

const decompressString = (inputString) => {
	let currentInt = ''; // - 1
	let curentString = '';
	let resultString;
	//   inputString[index] -> 1
	for (let index = 0; index < inputString.length; index += 1) {
		if (Number(inputString[index] > -1)) {
			currentInt += inputString[index];
		}
		if (inputString[index + 1] === '[') {
			for (
				let indexTwo = index + 1;
				indexTwo < inputString.length;
				indexTwo += 1
			) {
				if (inputString[indexTwo] === ']') {
					break;
				} else if (inputString[indexTwo] !== '[') {
					curentString += inputString[indexTwo];
				}
			}
		}
		resultString = curentString.repeat(currentInt);
	}
	return resultString;
};

describe('Build decompressString reading the comments', () => {
	it('decompressString function is defined', () => {
		expect(decompressString).toBeDefined();
	});
	it('decompressString function returns abcabcabcababababc', () => {
		expect(decompressString('3[abc]')).toEqual('abcabcabc');
	});
	it('decompressString function returns abcabcabcababababc', () => {
		expect(decompressString('10[abc]')).toEqual(
			'abcabcabcabcabcabcabcabcabcabc'
		);
	});
	xit('decompressString function returns abcabcabcababababc', () => {
		expect(decompressString('3[abc]4[ab]c')).toEqual('abcabcabcababababc');
	});
	xit('decompressString function returns abcabcabcababababc', () => {
		expect(decompressString('3[abc2[z]]4[ab]c')).toEqual(
			'abczzabczzabczzababababc'
		);
	});
});
