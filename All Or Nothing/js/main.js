

//let key = ["A", "_", "C", "_", "B"]
//let answer=  ["A", "D", "C", "E", "B"]
//let elozo;
//let joe=true;
//let jo=0;
//for (let i = 0; i < answer.length; i++) {
//    if (key[i]==answer[i]) {
//        joe=true;
//        if (elozo==joe) {
//            jo++;
//        }
//        else{
//            jo=0;
//        }
//    }
//    else if (key[i]=="_") {
//        jo++;
//    }
//    else {
//        joe=false;
//        if (elozo==joe) {
//            jo++;
//        }
//        else{
//            jo=0;
//        }
//    }
//    elozo=joe;
//    console.log(jo);
//}
//if(jo==4){
//    console.log("True")
//}
//else{
//    console.log("False")
//}




let key = ["A", "_", "C", "_", "B"]
let answer=  ["A", "D", "C", "E", "B"]
let t=0;
let f=0;
for (let i = 0; i < key.length; i++) {
    if(key[i]==answer[i]){
        t++;
    }
    else if(key[i]=="_"){
        t++;
        f++;
    }
    else{
        f++;
    }

}
if(t==key.length || f==key.length){
    console.log("True")
}
else{
    console.log("False")
}
