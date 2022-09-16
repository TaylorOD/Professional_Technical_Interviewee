// Write a program that displays LCD style numbers.

// The digits to be displayed will be passed as an argument to the program.

// For example, if your program is called with:

// > lcd.rb 012345

// console.log(lcd("12345"))

// The correct display is:

//  --        --   --        --
// |  |    |    |    | |  | |
// |  |    |    |    | |  | |
//            --   --   --   --
// |  |    | |       |    |    |
// |  |    | |       |    |    |
//  --        --   --        --

// input: 0

//  --        --   --        --
// |  |    |    |    | |  | |
// |  |    |    |    | |  | |
//            --   --   --   --
// |  |    | |       |    |    |
// |  |    | |       |    |    |
//  --        --   --        --

// input: 059

/*
input: 0-9 string - digits
output: string

digits = { 0: [
 -- 
|  |
|  |
    
|  |
|  |
 -- 
], 
}

{ 0: " -- "
1: "|  |"
2: "|  |"
3: "    "
4: "|  |"
5: "|  |"
6: " -- "
}

*/

const lcd = (inputString) => {
	let resultString = '';
	const digits = [
		{
			0: ' -- ',
			1: '|  |',
			2: '|  |',
			3: '    ',
			4: '|  |',
			5: '|  |',
			6: ' -- ',
		},
	];

	for (let indexTwo = 0; indexTwo <= 6; indexTwo += 1) {
		for (let index = 0; index < inputString.length; index += 1) {
			resultString += digits[inputString[index]][indexTwo];
			if (index === inputString.length - 1) {
				resultString += '\n';
			}
		}
	}

	return resultString;
};

console.log(lcd('00'), 'should be 00');
