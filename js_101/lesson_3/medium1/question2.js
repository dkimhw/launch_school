

let munstersDescription = "The Munsters are creepy and spooky.";

function isUpperCase(char) {
    return (char.toUpperCase() === char) ;
}

function swapCase(str) {
    return str.split('').map(char => {
        if (isUpperCase(char)) {
            return char.toLowerCase();
        } else {
            return char.toUpperCase();
        }
    }).join('');
}

console.log(swapCase(munstersDescription));