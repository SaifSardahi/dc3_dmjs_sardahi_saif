function suppDouble(nbr) {

    let suppDupl = [];

    for (let a = 0; a < nbr.length; a++) {
        let nbrDouble = false;
        for (let b = 0; b < suppDupl.length; b++) {
            if (tableau[a] === suppDupl[b]) {
                nbrDouble = true;
            }
        }
        if (nbrDouble === false) {
            suppDupl.push(tableau[b]);
        }
    }

    return suppDupl;
}

let lotoNumber = [8, 12, 19, 3, 25, 37, 29, 56, 12, 43];

console.log(suppDouble(lotoNumber));