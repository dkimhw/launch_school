let obj = {
    grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
    carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
    apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
    apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
    marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

// let capitalize = word => word[0].toUpperCase() + word.slice(1);

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

let newArr = []
Object.entries(obj).forEach(o => {
    //console.log(o);
    if (o[1].type === 'fruit') {
        newArr.push(o[1].colors.map(el => capitalize(el)));
    } else if (o[1].type === 'vegetable') {
        newArr.push(o[1]['size'].toUpperCase());
    }
});

console.log(newArr);

/*
// Alternate code
let capitalize = word => word[0].toUpperCase() + word.slice(1);

Object.values(obj).map(attributes => {
  if (attributes['type'] === 'fruit') {
    return attributes['colors'].map(char => capitalize(char));
  } else {
    return attributes['size'].toUpperCase();
  }
});

*/