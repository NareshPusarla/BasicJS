const random = [];
var sum = 0;
for(let i = 0; i<5; i++){
    let x = Math.floor(Math.random() * 100);
    random.push(x);
}
function add(){
    random.forEach(element => {
    sum += element;
    });
    console.log(sum);
}
console.log(random);
add();