
let findRthSmallest = (seq, r) => {
    // Can only store r elements
    let saveRElements = [];
    let n = seq.length;

    // Can only loop in order of the sequence
    for (let i = 0; i < n; i++) {
        console.log(seq[i]); // ???
    }

}

let s = [3, 7, 9, 5, 2] // how to find r = 3; you want 5

findRthSmallest(s, 1)

// how do you find the ith in this scenario right? I am not sure.
// O (r)

/*

s_0: saveRElements[3]
s_1: saveRElements[3, 7]
s_2: saveRElements[3, 7, 9]
s_3: need to drop one if necessaary


*/