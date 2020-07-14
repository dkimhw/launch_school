

/*

Input: none

Output: UUID

Definitions: 
* UUID is a 32 hexadecimal character (0-9, a-f)
* Broken into 5 sections in a 8-4-4-4-12 pattern
* 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'

Algorithm:
* First we need to figure out how to randomly call one of 0-9, a-f
* Then we need to loop through in the pattern described above randomly selecting each time
    * Set arr called patternArr = [8, 4, 4, 4, 12]
    * Set string called UUID = ''
    * Loop through the patternArr, and for each element in patternArr - run a for loop by the value
    * So if 8, we loop eight times. And each time: append a random (0-9, a-f)

*/


function returnUUID() {
    let uuidCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    let patternArr = [8, 4, 4, 4, 12];
    let UUID = "";
    let countPatternLoop = 0;

    patternArr.forEach( (loopCounter, index) => {
        for (let i = 0; i < loopCounter; i++) {
            let randomIndex = Math.floor(Math.random() * uuidCharacters.length);
            // console.log(uuidCharacters[randomIndex]);
            UUID += uuidCharacters[randomIndex];
        }

        countPatternLoop++;

        if (index < patternArr.length - 1) {
            UUID += '-';
        }
    })
    
    return UUID;
}

console.log(returnUUID());