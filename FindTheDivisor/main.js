function divisors(integer) {
  let divs = []
  let div = 2
  while(integer > div) {
    if(integer % div == 0) {
      divs.push(div)
    }
    div++
  }
  if(divs.length != 0)
    return divs
  return `${integer} is prime`
}
