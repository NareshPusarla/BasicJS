const random = [];
for(let i = 0; i<5; i++){
    let x = Math.floor(Math.random() * 100);
    random.push(x);
}
console.log(random);
console.log(random.sort());
console.log(random[0],random[4]);