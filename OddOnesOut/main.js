function oddOnesOut(szamok) {
    return szamok.filter(n => szamok.filter(x => x === n).length % 2 === 0);
}