let result1,result2;
function getRandomInt() {
    result1 = Math.ceil((Math.random() * 10)%6);
    result2 = Math.ceil((Math.random() * 10)%6);
    return result1 + result2;
  }
  
  console.log(getRandomInt());