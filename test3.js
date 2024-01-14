let numbers=[1,2,3,4,6,8,10];
function sum(){
    let add=0
    for (let i= 0; i<numbers.length;i++){
       add+= numbers[i]
    }
    return add;
}
console.log(sum());
// countEven(numbers) : a function that takes an array of numbers and returns the count of even numbers.
let Numbers =[1,2,3,4,6,5,10,12,14]
function countEven(){
    var eveNum=0
    for ( let i = 0; i< Numbers.length;i++)
    {
        if (Numbers[i]%2=== 0)
        {
            eveNum++;
        }
    }
    return eveNum;
}
console.log(countEven());
// a function that takes an array of numbers and returns a new array where each element is doubled [4, 2, 7] ----> [8, 4, 14]
let double=[2,3,4];
function Double(){
    const newarr= [];
    for ( let i = 0; i< double.length;i++){
        newarr.push(double[i]*2);
    }
    return newarr;
}
console.log(Double());
// task
function countPairs(socks) {
    let colorCounts = {};
    let pairCount = 0;
  
    // Count the occurrences of each color
    for (let i = 0; i < socks.length; i++) {
      let color = socks[i];
      if (colorCounts[color] === undefined) {
        colorCounts[color] = 1;
      } else {
        colorCounts[color]++;
      }
    }
  
    // Count the number of pairs for each color
    for (let color in colorCounts) {
        pairCount += Math.floor(colorCounts[color] / 2);
      }
    
  
    return pairCount;
  }
  
  // Example usage
  const socksArray = [1, 2, 1, 2, 3, 4, 1, 2];
  const pairs = countPairs(socksArray);
  console.log("Number of pairs: ", pairs);
  
  