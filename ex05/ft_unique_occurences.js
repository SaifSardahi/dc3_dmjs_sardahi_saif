function unicVal(tabl) {

    let valeur = {};

    for (let i = 0; i < tabl.length; i++) {

        if (valeur[tabl[i]]) {
            return false;
        }

        valeur[tabl[i]] = true;
    }

    return true;
}

let loto = [8, 12, 19, 3, 25, 37, 29, 56, 43];

console.log(unicVal(loto));