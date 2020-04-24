

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

for (person in ages) {
    if (person === 'Spot') {
        console.log('Spot found.')
    }
}

// ages.hasOwnProperty("Spot");