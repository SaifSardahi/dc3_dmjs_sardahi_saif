function check(tabl) {
    for (var i = 0; i < tabl.length; i++) {
        for (var j = i + 1; j < tabl.length; j++) {
            if (tabl[i] === tabl[j]) {
                return true;
            }
        }
    }
    return false;
}

console.log(check([8, 12, 19, 3, 25, 37, 29, 56, 12, 43]));