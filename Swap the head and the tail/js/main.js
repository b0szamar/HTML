function csere(p) {
    let fel = Math.ceil(p.length/2)
    let e = []
    if (p.length%2==0) {
        for (let i = fel; i < p.length; i++) {
        e.push(p[i])
    }
    for (let j = 0; j < fel; j++) {
        e.push(p[j]);   
    }
    return e
    }

    for (let i = fel; i < p.length; i++) {
        e.push(p[i])
    }
    e.push(p[fel-1])
    for (let j = 0; j < fel-1; j++) {
        e.push(p[j]);   
    }
    return e
}
let test1 = [ -1, 2 ];
let test2 = [ 1, 2, -3, 4, 5, 6, -7, 8 ]
let test3 = [1,2,3]
console.log(csere(test1).join())
console.log(csere(test2).join())
console.log(csere(test3).join())