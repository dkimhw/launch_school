
// You have access to arguments object (it stores arguments you passed in)
function wordLengths(str) {
    if (arguments.length === 0) {
        return [];
    }

    if (str.length > 0) {
        return str.split(' ').map(char => {
            char = char + " " + char.length;
            return char;
        });
    } else {
        return [];
    }
}

console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []

console.log(wordLengths());        // []