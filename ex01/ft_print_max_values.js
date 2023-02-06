function plusGrand(tabl) {
    var un = 0;
    var deux = 0;

    for (i = 0; i < tabl.length; i++) {
        if (tabl[i] > un)

        {
            deux = un;
            un = a = tabl[i];
        } else if (tabl[i] > deux) {
            deux = tabl[i];
        }

    }
    return [un, deux];
}

console.log(plusGrand([1, 8, 26, 12, 57, 3, 25]));