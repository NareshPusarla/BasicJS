let a = 5;
let b = 10;
let c = 15;

let result1 = a + b * c 
let result2 = c + a / b
let result3 = a % b + c 
let result4 = a * b + c
console.log(result1, result2, result3, result4);

let max;
if(result1>result2 && result1>result3 && result1>result4){
    max = result1;
}else if (result2>result1 && result2>result3 && result2>result4) {
    max = result2;
} else if(result3>result1 && result3>result2 && result3>result4) {
    max = result3;
}else if(result4>result1 && result4>result2 && result4>result3){
    max = result4;
}

let min;
if(result1<result2 && result1<result3 && result1<result4){
    min = result1;
}else if (result2<result1 && result2<result3 && result2<result4) {
    min = result2;
} else if(result3<result1 && result3<result2 && result3<result4) {
    min = result3;
}else if(result4<result1 && result4<result2 && result4<result3){
    min = result4;
}

console.log(max);
console.log(min);

