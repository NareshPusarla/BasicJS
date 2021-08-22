const random = [];
let sum = 0;
let averageOfArray = 0;

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

function average(){
    random.forEach(element => {
    averageOfArray += element;

    });
    console.log(averageOfArray/3);
}

console.log(random);
add();
average();