function insertDash(number) {
    let dash = "";
    let text = number.toString().split("");
    for(let i = 0; i < text.length - 1; i++){
        dash += "" + text[i];
        if((text[i] % 2 != 0) && (text[i+1] % 2 != 0)){
            dash =dash+ "-";
        }
        if(i + 2 >= text.length){
            dash =dash+ text[i+1];
        }
    }
    return dash;
}
console.log(insertDash(454793));