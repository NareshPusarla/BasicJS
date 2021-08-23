const random = [];

for(let i = 0; i<10; i++){
    let x = Math.floor(Math.random() * 1000);
    random.push(x);
}
y = random.sort();
console.log(random);
console.log(y);
console.log(y[1],y[8]);